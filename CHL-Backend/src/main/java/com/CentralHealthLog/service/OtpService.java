package com.CentralHealthLog.service;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
public class OtpService {

    private static final Integer EXPIRE_MINS = 5;

    private LoadingCache<String, Integer> otpCache;

    public OtpService(){
        super();
        otpCache = CacheBuilder.newBuilder()
                .expireAfterWrite(EXPIRE_MINS, TimeUnit.MINUTES)
                .build(new CacheLoader<String, Integer>() {
                    @Override
                    public Integer load(String key) {
                        return 0;
                    }
                });
    }

    //this method is used to push the otp number against key. Rewrite the otp if exist
    //using user id as a key
    public int generateOtp(String key){
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        otpCache.put(key, otp);
        return otp;
    }


    public int getOtp(String key){
        try{
            return otpCache.get(key);

        }catch(Exception e){
            System.out.println("exception occured after otp");
            return 0;
        }
    }


    //this method is used to clear the otp cache
    public void clearOtp(String key){
        otpCache.invalidate(key);
    }
}





