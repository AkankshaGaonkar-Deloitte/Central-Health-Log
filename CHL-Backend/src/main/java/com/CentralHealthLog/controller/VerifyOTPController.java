package com.CentralHealthLog.controller;

import com.CentralHealthLog.dto.PostResponse;
import com.CentralHealthLog.dto.SMSPojo;
import com.CentralHealthLog.dto.StoreOTP;
import com.CentralHealthLog.dto.TempOTP;
import com.CentralHealthLog.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<PostResponse>  verifyOTP(@RequestBody TempOTP sms){
        PostResponse response = new PostResponse();
        if (sms.getOtp() == otpService.getOtp(sms.getPhoneNo())){
            otpService.clearOtp(sms.getPhoneNo());
            response.setResponseMessage("OTP verified!");
            return new ResponseEntity<PostResponse>(response,HttpStatus.OK);
        }
        else {
            response.setResponseMessage("Invalid OTP!");
            return new ResponseEntity<PostResponse>(response,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
