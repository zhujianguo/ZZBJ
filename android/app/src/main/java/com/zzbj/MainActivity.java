package com.zzbj;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ZZBJ";
    }
	
	@Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
     // https://github.com/react-navigation/react-navigation/issues/1372#issuecomment-299432731
     @Override
     public void invokeDefaultOnBackPressed() {
         moveTaskToBack(true);
     }
}
