/*
 * Camera data is deliberately separate from the UI.
 * Add a camera by copying one object and keeping the same keys.
 * Checked against manufacturers' Japanese product/specification pages on 2026-08-01.
 */
window.CAMERAS = [
  {id:'sony-a1-ii',brand:'Sony',model:'α1 II',mount:'Sony E',sensor:'Full Frame',mp:50.1,ibis:true,burst:'30 fps',burstValue:30,video:'8K 30p / 4K 120p',weight:743,released:'2024-12',purpose:['photo','hybrid','speed'],official:'https://www.sony.jp/ichigan/products/ILCE-1M2/'},
  {id:'sony-a9-iii',brand:'Sony',model:'α9 III',mount:'Sony E',sensor:'Full Frame',mp:24.6,ibis:true,burst:'120 fps',burstValue:120,video:'4K 120p',weight:702,released:'2024-01',purpose:['photo','speed'],official:'https://www.sony.jp/ichigan/products/ILCE-9M3/'},
  {id:'sony-a7r-vi',brand:'Sony',model:'α7R VI',mount:'Sony E',sensor:'Full Frame',mp:66.8,ibis:true,burst:'30 fps',burstValue:30,video:'4K 60p',weight:723,released:'2026-04',purpose:['photo','hybrid'],official:'https://www.sony.jp/ichigan/products/ILCE-7RM6/'},
  {id:'sony-a7-v',brand:'Sony',model:'α7 V',mount:'Sony E',sensor:'Full Frame',mp:33.0,ibis:true,burst:'30 fps',burstValue:30,video:'4K 120p',weight:695,released:'2025-12',purpose:['photo','hybrid','speed'],official:'https://www.sony.jp/ichigan/products/ILCE-7M5/'},
  {id:'sony-a7-iv',brand:'Sony',model:'α7 IV',mount:'Sony E',sensor:'Full Frame',mp:33.0,ibis:true,burst:'10 fps',burstValue:10,video:'4K 60p',weight:658,released:'2021-12',purpose:['hybrid'],official:'https://www.sony.jp/ichigan/products/ILCE-7M4/'},
  {id:'sony-a7cr',brand:'Sony',model:'α7CR',mount:'Sony E',sensor:'Full Frame',mp:61.0,ibis:true,burst:'8 fps',burstValue:8,video:'4K 60p',weight:515,released:'2023-10',purpose:['photo','hybrid'],official:'https://www.sony.jp/ichigan/products/ILCE-7CR/'},
  {id:'sony-a7c-ii',brand:'Sony',model:'α7C II',mount:'Sony E',sensor:'Full Frame',mp:33.0,ibis:true,burst:'10 fps',burstValue:10,video:'4K 60p',weight:514,released:'2023-10',purpose:['photo','hybrid'],official:'https://www.sony.jp/ichigan/products/ILCE-7CM2/'},
  {id:'sony-a6700',brand:'Sony',model:'α6700',mount:'Sony E',sensor:'APS-C',mp:26.0,ibis:true,burst:'11 fps',burstValue:11,video:'4K 120p',weight:493,released:'2023-07',purpose:['photo','hybrid','video'],official:'https://www.sony.jp/ichigan/products/ILCE-6700/'},
  {id:'sony-fx2',brand:'Sony',model:'FX2',mount:'Sony E',sensor:'Full Frame',mp:33.0,ibis:true,burst:'10 fps',burstValue:10,video:'4K 60p / 16-bit RAW output',weight:770,released:'2025-08',purpose:['hybrid','video'],official:'https://www.sony.jp/pro-cam/products/ILME-FX2B/'},
  {id:'sony-fx3',brand:'Sony',model:'FX3',mount:'Sony E',sensor:'Full Frame',mp:12.1,ibis:true,burst:'10 fps',burstValue:10,video:'4K 120p / 16-bit RAW output',weight:715,released:'2021-03',purpose:['video'],official:'https://www.sony.jp/pro-cam/products/ILME-FX3A/'},
  {id:'sony-fx30',brand:'Sony',model:'FX30',mount:'Sony E',sensor:'APS-C',mp:26.0,ibis:true,burst:'—',burstValue:0,video:'4K 120p / 16-bit RAW output',weight:646,released:'2022-10',purpose:['video'],official:'https://www.sony.jp/pro-cam/products/ILME-FX30/'},

  {id:'nikon-z9',brand:'Nikon',model:'Z9',mount:'Nikon Z',sensor:'Full Frame',mp:45.7,ibis:true,burst:'20 fps RAW / 120 fps JPEG',burstValue:120,video:'8.3K 60p RAW / 4K 120p',weight:1340,released:'2021-12',purpose:['photo','hybrid','speed'],official:'https://nij.nikon.com/products/lineup/mirrorless/z9/'},
  {id:'nikon-z8',brand:'Nikon',model:'Z8',mount:'Nikon Z',sensor:'Full Frame',mp:45.7,ibis:true,burst:'20 fps RAW / 120 fps JPEG',burstValue:120,video:'8.3K 60p RAW / 4K 120p',weight:910,released:'2023-05',purpose:['photo','hybrid','speed'],official:'https://nij.nikon.com/products/lineup/mirrorless/z8/'},
  {id:'nikon-z6-iii',brand:'Nikon',model:'Z6III',mount:'Nikon Z',sensor:'Full Frame',mp:24.5,ibis:true,burst:'20 fps RAW / 120 fps JPEG',burstValue:120,video:'6K 60p RAW / 4K 120p',weight:760,released:'2024-07',purpose:['hybrid','video','speed'],official:'https://nij.nikon.com/products/lineup/mirrorless/z6_3/'},
  {id:'nikon-z5-ii',brand:'Nikon',model:'Z5II',mount:'Nikon Z',sensor:'Full Frame',mp:24.5,ibis:true,burst:'15 fps RAW / 30 fps JPEG',burstValue:30,video:'4K 60p RAW',weight:700,released:'2025-04',purpose:['photo','hybrid'],official:'https://nij.nikon.com/products/lineup/mirrorless/z5_2/'},
  {id:'nikon-zr',brand:'Nikon',model:'ZR',mount:'Nikon Z',sensor:'Full Frame',mp:24.5,ibis:true,burst:'20 fps RAW / 120 fps JPEG',burstValue:120,video:'6K 60p R3D NE RAW / 4K 120p',weight:630,released:'2025-10',purpose:['hybrid','video','speed'],official:'https://nij.nikon.com/products/lineup/z_cinema/zr/'},

  {id:'fuji-gfx100s-ii',brand:'FUJIFILM',model:'GFX100S II',mount:'FUJIFILM G',sensor:'Medium Format',mp:102.0,ibis:true,burst:'7 fps',burstValue:7,video:'4K 30p',weight:883,released:'2024-06',purpose:['photo'],official:'https://www.fujifilm-x.com/ja-jp/products/cameras/gfx100s-ii/'},
  {id:'fuji-xh2s',brand:'FUJIFILM',model:'X-H2S',mount:'FUJIFILM X',sensor:'APS-C',mp:26.1,ibis:true,burst:'40 fps',burstValue:40,video:'6.2K 30p / 4K 120p',weight:660,released:'2022-07',purpose:['hybrid','video','speed'],official:'https://www.fujifilm-x.com/ja-jp/products/cameras/x-h2s/'},
  {id:'fuji-xh2',brand:'FUJIFILM',model:'X-H2',mount:'FUJIFILM X',sensor:'APS-C',mp:40.2,ibis:true,burst:'20 fps',burstValue:20,video:'8K 30p / 4K 60p',weight:660,released:'2022-09',purpose:['photo','hybrid'],official:'https://www.fujifilm-x.com/ja-jp/products/cameras/x-h2/'},
  {id:'fuji-xt5',brand:'FUJIFILM',model:'X-T5',mount:'FUJIFILM X',sensor:'APS-C',mp:40.2,ibis:true,burst:'20 fps',burstValue:20,video:'6.2K 30p / 4K 60p',weight:557,released:'2022-11',purpose:['photo','hybrid'],official:'https://www.fujifilm-x.com/ja-jp/products/cameras/x-t5/'},
  {id:'fuji-xs20',brand:'FUJIFILM',model:'X-S20',mount:'FUJIFILM X',sensor:'APS-C',mp:26.1,ibis:true,burst:'20 fps',burstValue:20,video:'6.2K 30p / 4K 60p',weight:491,released:'2023-06',purpose:['hybrid','video'],official:'https://www.fujifilm-x.com/ja-jp/products/cameras/x-s20/'},

  {id:'sigma-bf',brand:'SIGMA',model:'BF',mount:'L-Mount',sensor:'Full Frame',mp:24.6,ibis:false,burst:'8 fps',burstValue:8,video:'6K 30p / FHD 120p',weight:446,released:'2025-04',purpose:['photo','hybrid','video'],official:'https://www.sigma-global.com/jp/cameras/bf/'},
  {id:'sigma-fpl',brand:'SIGMA',model:'fp L',mount:'L-Mount',sensor:'Full Frame',mp:61.0,ibis:false,burst:'10 fps',burstValue:10,video:'4K 30p CinemaDNG',weight:427,released:'2021-04',purpose:['photo','hybrid','video'],official:'https://www.sigma-global.com/jp/cameras/fpl/'},
  {id:'sigma-fp',brand:'SIGMA',model:'fp',mount:'L-Mount',sensor:'Full Frame',mp:24.6,ibis:false,burst:'18 fps',burstValue:18,video:'4K 30p CinemaDNG',weight:422,released:'2019-10',purpose:['hybrid','video'],official:'https://www.sigma-global.com/jp/cameras/fp/'}
];

const CAMERA_DETAILS = {
  'sony-a1-ii': {ibisLabel:'中央 8.5段 / 周辺 7.0段',price:'990,000円',display:'3.2" 4軸マルチアングル TFT液晶・タッチ・約209万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-1M2.jpg'},
  'sony-a9-iii': {ibisLabel:'8.0段',price:'935,000円',display:'3.2" 4軸マルチアングル TFT液晶・タッチ・約209万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-9M3.jpg'},
  'sony-a7r-vi': {ibisLabel:'中央 8.5段 / 周辺 7.0段',price:'740,300円',display:'3.2" 4軸マルチアングル TFT液晶・タッチ・約209万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-7RM6.jpg'},
  'sony-a7-v': {ibisLabel:'中央 7.5段 / 周辺 6.5段',price:'416,900円〜',display:'3.2" 4軸マルチアングル TFT液晶・タッチ・約209万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-7M5.jpg'},
  'sony-a7-iv': {ibisLabel:'5.5段',price:'361,900円〜',display:'3.0" バリアングル TFT液晶・タッチ・約104万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-7M4.jpg'},
  'sony-a7cr': {ibisLabel:'7.0段',price:'449,900円〜',display:'3.0" バリアングル TFT液晶・タッチ・約104万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-7CR.jpg'},
  'sony-a7c-ii': {ibisLabel:'7.0段',price:'306,900円〜',display:'3.0" バリアングル TFT液晶・タッチ・約104万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-7CM2.jpg'},
  'sony-a6700': {ibisLabel:'5.0段',price:'229,900円〜',display:'3.0" バリアングル TFT液晶・タッチ・約104万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILCE-6700.jpg'},
  'sony-fx2': {ibisLabel:'中央 5.5段 / 周辺 5.0段',price:'416,900円',display:'3.0" バリアングル TFT液晶・タッチ・約104万ドット',brightness:'数値非公表',image:'https://sony.scene7.com/is/image/sonyglobalsolutions/ILME-FX2B-2?$jpCategoryPdpNavProductImage$='},
  'sony-fx3': {ibisLabel:'5.5段',price:'581,900円',display:'3.0" バリアングル TFT液晶・タッチ・約236万ドット',brightness:'数値非公表',image:'https://sony.scene7.com/is/image/sonyglobalsolutions/ILME-FX3A_01?$jpCategoryPdpNavProductImage$='},
  'sony-fx30': {ibisLabel:'5軸 5.5段',price:'297,000円〜',display:'3.0" バリアングル TFT液晶・タッチ・約236万ドット',brightness:'数値非公表',image:'https://www.sony.jp/products/picture/middle/ILME-FX30.jpg'},
  'nikon-z9': {ibisLabel:'最大 6.0段',price:'オープン価格',display:'3.2" 縦横4軸チルト TFT液晶・タッチ・約210万ドット',brightness:'数値非公表',image:'https://nij.nikon.com/cms/products/mirrorless/lineup/z_9/img/index/product_01.jpg'},
  'nikon-z8': {ibisLabel:'最大 6.0段',price:'オープン価格',display:'3.2" 縦横4軸チルト TFT液晶・タッチ・約210万ドット',brightness:'数値非公表',image:'https://nij.nikon.com/cms/products/mirrorless/lineup/z_8/img/index/product_01.jpg'},
  'nikon-z6-iii': {ibisLabel:'8.0段',price:'オープン価格',display:'3.2" バリアングル TFT液晶・タッチ・約210万ドット',brightness:'数値非公表',image:'https://nij.nikon.com/cms/products/mirrorless/lineup/z6_3/img/index/product_01.jpg'},
  'nikon-z5-ii': {ibisLabel:'中央 7.5段 / 周辺 6.0段',price:'オープン価格',display:'3.2" バリアングル TFT液晶・タッチ・約210万ドット',brightness:'数値非公表',image:'https://nij.nikon.com/cms/products/lineup/mirrorless/z5_2/img/index/product_01.jpg'},
  'nikon-zr': {ibisLabel:'中央 7.5段 / 周辺 6.0段',price:'オープン価格',display:'4.0" バリアングル TFT液晶・タッチ・約307万ドット・DCI-P3',brightness:'1,000 cd/m²',image:'https://nij.nikon.com/cms/products/lineup/z_cinema/zr/img/index/product_01.jpg'},
  'fuji-gfx100s-ii': {ibisLabel:'8.0段',price:'オープン価格',display:'3.2" 3方向チルト TFT液晶・タッチ・約236万ドット',brightness:'数値非公表',image:'https://shopusa.fujifilm-x.com/media/catalog/product/6/0/600023616_MAIN00_Image_GFX100S__front_CMOS.jpg'},
  'fuji-xh2s': {ibisLabel:'7.0段',price:'オープン価格',display:'3.0" バリアングル TFT液晶・タッチ・約162万ドット',brightness:'数値非公表',image:'https://shopusa.fujifilm-x.com/media/catalog/product/1/6/16756924_MAIN00_Image_X-H2S_front_CMOS_3.jpg'},
  'fuji-xh2': {ibisLabel:'7.0段',price:'オープン価格',display:'3.0" バリアングル TFT液晶・タッチ・約162万ドット',brightness:'数値非公表',image:'https://shopusa.fujifilm-x.com/media/catalog/product/1/6/16757045_MAIN00_Image_X-H2_front_CMOS_3.jpg'},
  'fuji-xt5': {ibisLabel:'7.0段',price:'オープン価格',display:'3.0" 3方向チルト TFT液晶・タッチ・約184万ドット',brightness:'数値非公表',image:'https://shopusa.fujifilm-x.com/media/catalog/product/1/6/16782301_MAIN00_Image_X-T5_front_CMOS_black_4.jpg'},
  'fuji-xs20': {ibisLabel:'7.0段',price:'オープン価格',display:'3.0" バリアングル TFT液晶・タッチ・約184万ドット',brightness:'数値非公表',image:'https://shopusa.fujifilm-x.com/media/catalog/product/1/6/16781852_MAIN00_Image_X-S20_front_Sensor.jpg'},
  'sigma-bf': {ibisLabel:'なし（動画EISのみ）',price:'385,000円',display:'3.15" 固定式 TFT液晶・タッチ・約210万ドット',brightness:'数値非公表',image:'https://www.sigma-global.com/cameras/bf_camera_01.jpg'},
  'sigma-fpl': {ibisLabel:'なし（動画電子式のみ）',price:'生産完了（オープン価格）',display:'3.15" 固定式 TFT液晶・タッチ・約210万ドット',brightness:'数値非公表',image:'https://www.sigma-global.com/cameras/fpl_product_img01.png'},
  'sigma-fp': {ibisLabel:'なし（動画電子式のみ）',price:'生産完了（オープン価格）',display:'3.15" 固定式 TFT液晶・タッチ・約210万ドット',brightness:'数値非公表',image:'https://www.sigma-global.com/cameras/fp_product_img01.png'}
};

window.CAMERAS.forEach(camera => Object.assign(camera, CAMERA_DETAILS[camera.id] || {
  ibisLabel: camera.ibis ? 'あり（段数非公表）' : 'なし',
  price: '価格非公表',
  display: null,
  brightness: null
}));
