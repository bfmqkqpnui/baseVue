let u = navigator.userAgent;
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

let H5MEMBERURL = ''

const SERVICE_PROXY_URL = '/h5_api'
const PLATFORM = isiOS ? 'iOS' : isAndroid ? 'Android' : ''

switch (location.host) {
  case '10.199.5.19:8088': // 测试环境
  case 'localhost:8088': // 测试环境
    H5MEMBERURL = 'http://zf.st.bl.com/payment/payForTaoli.html';
    break;
  case 'mh5.ut.bl.com': // pre环境
    H5MEMBERURL = 'http://zf.st.bl.com/payment/payForTaoli.html';
    break;
  /*default:
    H5BASE_URL = 'https://m.bl.com/h5-web'; // 生产环境
    H5PAYMENTURL = 'https://payment.bl.com/payment/payForTaoli.html';
    H5PAYFORAPP = 'https://payment.bl.com/payment/payForApp.html'
    H5VUEBASEURL = 'https://mh5.bl.com/h5.html#'
    H5PARKINGURL = 'https://m.bl.com/parking-web'*/
}

export default {
  SERVICE_PROXY_URL, // 远程接口代理
  PLATFORM, // 移动端
  H5MEMBERURL, // 远程接口
}
