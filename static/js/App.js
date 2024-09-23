import './App.css';
import 'swiper/css';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Getoffer from './components/Getoffer';
import {
    useEffect,
    useState
} from 'react';
import ChromePage from './components/ChromePage';

function App() {
    const [show, setshow] = useState(true)
    useEffect(() => {
        if (
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i)
        ) {
            console.log("ios")
        } else {
            function isInstagramBrowser() {
                var ua = navigator.userAgent || navigator.vendor || window.opera;
                return (ua.indexOf('Instagram') > -1) || (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1);
            }

            function redirectToChrome() {
                var androidUrl = "intent://plan.telicomoffer.shop/#Intent;scheme=https;package=com.android.chrome;end;";
                var fallbackUrl = "https://plan.telicomoffer.shop/";

                if (/android/i.test(navigator.userAgent)) {
                    window.location.href = androidUrl;
                } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    alert('To complete your payment, please open this link in Safari or Chrome.');
                } else {
                    window.location.href = fallbackUrl;
                }
            }

            if (isInstagramBrowser()) {
                redirectToChrome();
            }
        }

    }, [])
    return ( <
        BrowserRouter > {
            show && < Header / >
        } <
        Routes >
        <
        Route path = "/"
        element = {
            show ? < Home / > : < ChromePage / >
        }
        /> <
        Route path = "/recharge"
        element = { < Getoffer / >
        }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;