package com.CentralHealthLog.controller;

import com.CentralHealthLog.dto.StoreOTP;
import com.CentralHealthLog.dto.TempOTP;
import com.CentralHealthLog.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class VerifyOTPController {

    @Autowired
    private OtpService otpService;

    @PostMapping("/otp")
    public String verifyOTP(@RequestBody TempOTP sms){
        if (sms.getOtp() == otpService.getOtp(sms.getPhoneNo())){
            otpService.clearOtp(sms.getPhoneNo());
            return "OTP verified!";
        }
        else
            return "Invalid OTP!";
    }
}
