package com.CentralHealthLog.service;

import com.CentralHealthLog.dto.SMSPojo;
import com.CentralHealthLog.dto.StoreOTP;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;

import java.text.ParseException;

@Component
public class SmsService {
    @Value("${twilio.account_sid}")
    private String ACCOUNT_SID;
    @Value("${twilio.auth_token}")
    private String AUTH_TOKEN;
    @Value("${twilio.from_number}")
    private String FROM_NUMBER;

    @Autowired
    private OtpService otpService;

    public void send(SMSPojo sms) throws ParseException{
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        int number = otpService.generateOtp(sms.getPhoneNo());

        String msg = "Your Central Health Log OTP is " + number;

        Message message = Message.creator(new PhoneNumber(sms.getPhoneNo()), new PhoneNumber(FROM_NUMBER),msg)
                .create();

        StoreOTP.setOtp(number);
    }

    public void receive(MultiValueMap<String, String> smscallback){

    }
}
