package com.CentralHealthLog.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.CentralHealthLog.dto.PostResponse;
import com.CentralHealthLog.dto.SMSPojo;
import com.CentralHealthLog.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class SMSController {

    @Autowired
    SmsService service;

    @Autowired
    private SimpMessagingTemplate webSocket;

    private final String  TOPIC_DESTINATION = "/lesson/sms";
    //You can send SMS in verified Number
    @PostMapping("/mobileNo")
    public ResponseEntity<PostResponse> smsSubmit(@RequestBody SMSPojo sms) {
        PostResponse response = new PostResponse();
        try{

            System.out.println(sms);
            service.send(sms);

        }
        catch(Exception e){
            response.setResponseMessage("Error Occured!");
            return new ResponseEntity<PostResponse>(response,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.setResponseMessage("OTP sent successfully!");
        webSocket.convertAndSend(TOPIC_DESTINATION, getTimeStamp() + ": SMS has been sent!: "+sms.getPhoneNo());
        return new ResponseEntity<PostResponse>(response,HttpStatus.OK);
    }

    @RequestMapping(value = "/smscallback", method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void smsCallback(@RequestBody MultiValueMap<String, String> map) {
        service.receive(map);
        webSocket.convertAndSend(TOPIC_DESTINATION, getTimeStamp() + ": Twilio has made a callback request! Here are the contents: "+map.toString());
    }

    private String getTimeStamp() {
        return DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now());
    }

}