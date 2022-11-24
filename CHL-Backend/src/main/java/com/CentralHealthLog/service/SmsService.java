package com.CentralHealthLog.service;

import com.CentralHealthLog.dto.SmsPojo;
import com.CentralHealthLog.dto.StoreOTP;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
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

    public void send(SmsPojo sms) throws ParseException{
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        int min = 100000;
        int max = 999999;
        int number = (int)(Math.random()*(max-min+1)+min);

        String msg = "Your Central Health Log OTP is " + number;

        Message message = Message.creator(new PhoneNumber(sms.getPhoneNo()), new PhoneNumber(FROM_NUMBER),msg)
                .create();

        StoreOTP.setOtp(number);
    }

    public void receive(MultiValueMap<String, String> smscallback){

    }
}
