import { useEffect } from "react";

function IntroText() {
  useEffect(() => {
    const paths = document.querySelectorAll('.intro-text > path')
    let offset = 0
    for (let i = 0; i < paths.length; i++) {
      paths[i].style.strokeDasharray = paths[i].getTotalLength();
      paths[i].style.strokeDashoffset = paths[i].getTotalLength();
      paths[i].animate([{ strokeDashoffset: 0}],{
        delay: 2000,
        duration: 6000 + offset,
        fill: "forwards"
      })
      offset += 50
    
    }

  })

  return (
    <div className="relative">
      <svg width="378" className="intro-text" height="50" viewBox="0 0 378 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.919998" y="0.479996" width="377" height="49" fill="black">
<rect fill="white" x="0.919998" y="0.479996" width="377" height="49"/>
<path d="M32.92 4.88V47H30.22V26.6H5.62V47H2.92V4.88H5.62V24.32H30.22V4.88H32.92Z"/>
<path d="M47.2023 7.16C46.5623 7.16 46.0223 6.96 45.5823 6.56C45.1423 6.11999 44.9223 5.54 44.9223 4.82C44.9223 4.14 45.1423 3.58 45.5823 3.14C46.0223 2.7 46.5623 2.48 47.2023 2.48C47.8423 2.48 48.3823 2.7 48.8223 3.14C49.2623 3.58 49.4823 4.14 49.4823 4.82C49.4823 5.54 49.2623 6.11999 48.8223 6.56C48.3823 6.96 47.8423 7.16 47.2023 7.16ZM48.5223 14.42V47H45.8223V14.42H48.5223Z"/>
<path d="M65.38 4.88L65.08 36.74H62.74L62.38 4.88H65.38ZM64.06 47.18C63.38 47.18 62.82 46.96 62.38 46.52C61.94 46.08 61.72 45.52 61.72 44.84C61.72 44.16 61.94 43.6 62.38 43.16C62.82 42.72 63.38 42.5 64.06 42.5C64.7 42.5 65.24 42.72 65.68 43.16C66.12 43.6 66.34 44.16 66.34 44.84C66.34 45.52 66.12 46.08 65.68 46.52C65.24 46.96 64.7 47.18 64.06 47.18Z"/>
<path d="M102.112 4.88V47H99.4122V4.88H102.112Z"/>
<path d="M115.25 4.88H118.67L113.99 17.18H111.95L115.25 4.88Z"/>
<path d="M166.842 13.76C170.562 13.76 173.602 14.96 175.962 17.36C178.322 19.72 179.502 23.24 179.502 27.92V47H176.862V28.1C176.862 24.22 175.922 21.26 174.042 19.22C172.202 17.14 169.662 16.1 166.422 16.1C163.062 16.1 160.362 17.26 158.322 19.58C156.282 21.9 155.262 25.26 155.262 29.66V47H152.622V28.1C152.622 24.22 151.682 21.26 149.802 19.22C147.962 17.14 145.422 16.1 142.182 16.1C138.822 16.1 136.122 17.26 134.082 19.58C132.042 21.9 131.022 25.26 131.022 29.66V47H128.322V14.42H131.022V21.5C131.942 18.94 133.422 17.02 135.462 15.74C137.542 14.42 139.922 13.76 142.602 13.76C145.562 13.76 148.102 14.54 150.222 16.1C152.382 17.62 153.862 19.88 154.662 22.88C155.422 19.88 156.902 17.62 159.102 16.1C161.302 14.54 163.882 13.76 166.842 13.76Z"/>
<path d="M210.338 26C210.338 21.84 211.198 18.14 212.918 14.9C214.678 11.62 217.078 9.06 220.118 7.22C223.198 5.38 226.638 4.46 230.438 4.46C235.238 4.46 239.278 5.57999 242.558 7.81999C245.838 10.06 248.238 13.2 249.758 17.24H246.638C245.438 14.04 243.438 11.52 240.638 9.68C237.878 7.8 234.478 6.86 230.438 6.86C227.198 6.86 224.258 7.64 221.618 9.2C218.978 10.72 216.898 12.94 215.378 15.86C213.858 18.74 213.098 22.12 213.098 26C213.098 29.84 213.858 33.2 215.378 36.08C216.898 38.92 218.978 41.12 221.618 42.68C224.258 44.24 227.198 45.02 230.438 45.02C234.478 45.02 237.878 44.1 240.638 42.26C243.438 40.38 245.438 37.84 246.638 34.64H249.758C248.238 38.68 245.838 41.82 242.558 44.06C239.278 46.3 235.238 47.42 230.438 47.42C226.638 47.42 223.198 46.52 220.118 44.72C217.078 42.88 214.678 40.34 212.918 37.1C211.198 33.82 210.338 30.12 210.338 26Z"/>
<path d="M275.95 13.76C279.79 13.76 282.93 14.96 285.37 17.36C287.81 19.72 289.03 23.24 289.03 27.92V47H286.39V28.1C286.39 24.22 285.41 21.26 283.45 19.22C281.49 17.14 278.83 16.1 275.47 16.1C271.95 16.1 269.13 17.22 267.01 19.46C264.93 21.7 263.89 25.02 263.89 29.42V47H261.19V2.6H263.89V21.32C264.81 18.88 266.35 17.02 268.51 15.74C270.67 14.42 273.15 13.76 275.95 13.76Z"/>
<path d="M299.892 30.68C299.892 27.32 300.552 24.38 301.872 21.86C303.232 19.34 305.092 17.4 307.452 16.04C309.852 14.68 312.572 14 315.612 14C319.052 14 321.972 14.84 324.372 16.52C326.772 18.2 328.452 20.34 329.412 22.94V14.42H332.112V47H329.412V38.42C328.452 41.06 326.752 43.24 324.312 44.96C321.912 46.64 319.012 47.48 315.612 47.48C312.572 47.48 309.852 46.8 307.452 45.44C305.092 44.04 303.232 42.08 301.872 39.56C300.552 37 299.892 34.04 299.892 30.68ZM329.412 30.68C329.412 27.84 328.812 25.34 327.612 23.18C326.452 20.98 324.852 19.3 322.812 18.14C320.772 16.94 318.492 16.34 315.972 16.34C313.332 16.34 311.012 16.92 309.012 18.08C307.012 19.2 305.452 20.84 304.332 23C303.212 25.16 302.652 27.72 302.652 30.68C302.652 33.64 303.212 36.2 304.332 38.36C305.452 40.52 307.012 42.18 309.012 43.34C311.052 44.5 313.372 45.08 315.972 45.08C318.492 45.08 320.772 44.5 322.812 43.34C324.892 42.14 326.512 40.46 327.672 38.3C328.832 36.1 329.412 33.56 329.412 30.68Z"/>
<path d="M343.263 30.68C343.263 27.32 343.923 24.38 345.243 21.86C346.603 19.34 348.463 17.4 350.823 16.04C353.223 14.68 355.943 14 358.983 14C362.303 14 365.183 14.84 367.623 16.52C370.063 18.16 371.783 20.3 372.783 22.94V2.6H375.483V47H372.783V38.36C371.823 41.04 370.143 43.24 367.743 44.96C365.343 46.64 362.423 47.48 358.983 47.48C355.943 47.48 353.223 46.8 350.823 45.44C348.463 44.04 346.603 42.08 345.243 39.56C343.923 37 343.263 34.04 343.263 30.68ZM372.783 30.68C372.783 27.84 372.183 25.34 370.983 23.18C369.823 20.98 368.223 19.3 366.183 18.14C364.143 16.94 361.863 16.34 359.343 16.34C356.703 16.34 354.383 16.92 352.383 18.08C350.383 19.2 348.823 20.84 347.703 23C346.583 25.16 346.023 27.72 346.023 30.68C346.023 33.64 346.583 36.2 347.703 38.36C348.823 40.52 350.383 42.18 352.383 43.34C354.423 44.5 356.743 45.08 359.343 45.08C361.863 45.08 364.143 44.5 366.183 43.34C368.263 42.14 369.883 40.46 371.043 38.3C372.203 36.1 372.783 33.56 372.783 30.68Z"/>
</mask>
<path d="M32.92 4.88V47H30.22V26.6H5.62V47H2.92V4.88H5.62V24.32H30.22V4.88H32.92Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M47.2023 7.16C46.5623 7.16 46.0223 6.96 45.5823 6.56C45.1423 6.11999 44.9223 5.54 44.9223 4.82C44.9223 4.14 45.1423 3.58 45.5823 3.14C46.0223 2.7 46.5623 2.48 47.2023 2.48C47.8423 2.48 48.3823 2.7 48.8223 3.14C49.2623 3.58 49.4823 4.14 49.4823 4.82C49.4823 5.54 49.2623 6.11999 48.8223 6.56C48.3823 6.96 47.8423 7.16 47.2023 7.16ZM48.5223 14.42V47H45.8223V14.42H48.5223Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M65.38 4.88L65.08 36.74H62.74L62.38 4.88H65.38ZM64.06 47.18C63.38 47.18 62.82 46.96 62.38 46.52C61.94 46.08 61.72 45.52 61.72 44.84C61.72 44.16 61.94 43.6 62.38 43.16C62.82 42.72 63.38 42.5 64.06 42.5C64.7 42.5 65.24 42.72 65.68 43.16C66.12 43.6 66.34 44.16 66.34 44.84C66.34 45.52 66.12 46.08 65.68 46.52C65.24 46.96 64.7 47.18 64.06 47.18Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M102.112 4.88V47H99.4122V4.88H102.112Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M115.25 4.88H118.67L113.99 17.18H111.95L115.25 4.88Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M166.842 13.76C170.562 13.76 173.602 14.96 175.962 17.36C178.322 19.72 179.502 23.24 179.502 27.92V47H176.862V28.1C176.862 24.22 175.922 21.26 174.042 19.22C172.202 17.14 169.662 16.1 166.422 16.1C163.062 16.1 160.362 17.26 158.322 19.58C156.282 21.9 155.262 25.26 155.262 29.66V47H152.622V28.1C152.622 24.22 151.682 21.26 149.802 19.22C147.962 17.14 145.422 16.1 142.182 16.1C138.822 16.1 136.122 17.26 134.082 19.58C132.042 21.9 131.022 25.26 131.022 29.66V47H128.322V14.42H131.022V21.5C131.942 18.94 133.422 17.02 135.462 15.74C137.542 14.42 139.922 13.76 142.602 13.76C145.562 13.76 148.102 14.54 150.222 16.1C152.382 17.62 153.862 19.88 154.662 22.88C155.422 19.88 156.902 17.62 159.102 16.1C161.302 14.54 163.882 13.76 166.842 13.76Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M210.338 26C210.338 21.84 211.198 18.14 212.918 14.9C214.678 11.62 217.078 9.06 220.118 7.22C223.198 5.38 226.638 4.46 230.438 4.46C235.238 4.46 239.278 5.57999 242.558 7.81999C245.838 10.06 248.238 13.2 249.758 17.24H246.638C245.438 14.04 243.438 11.52 240.638 9.68C237.878 7.8 234.478 6.86 230.438 6.86C227.198 6.86 224.258 7.64 221.618 9.2C218.978 10.72 216.898 12.94 215.378 15.86C213.858 18.74 213.098 22.12 213.098 26C213.098 29.84 213.858 33.2 215.378 36.08C216.898 38.92 218.978 41.12 221.618 42.68C224.258 44.24 227.198 45.02 230.438 45.02C234.478 45.02 237.878 44.1 240.638 42.26C243.438 40.38 245.438 37.84 246.638 34.64H249.758C248.238 38.68 245.838 41.82 242.558 44.06C239.278 46.3 235.238 47.42 230.438 47.42C226.638 47.42 223.198 46.52 220.118 44.72C217.078 42.88 214.678 40.34 212.918 37.1C211.198 33.82 210.338 30.12 210.338 26Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M275.95 13.76C279.79 13.76 282.93 14.96 285.37 17.36C287.81 19.72 289.03 23.24 289.03 27.92V47H286.39V28.1C286.39 24.22 285.41 21.26 283.45 19.22C281.49 17.14 278.83 16.1 275.47 16.1C271.95 16.1 269.13 17.22 267.01 19.46C264.93 21.7 263.89 25.02 263.89 29.42V47H261.19V2.6H263.89V21.32C264.81 18.88 266.35 17.02 268.51 15.74C270.67 14.42 273.15 13.76 275.95 13.76Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M299.892 30.68C299.892 27.32 300.552 24.38 301.872 21.86C303.232 19.34 305.092 17.4 307.452 16.04C309.852 14.68 312.572 14 315.612 14C319.052 14 321.972 14.84 324.372 16.52C326.772 18.2 328.452 20.34 329.412 22.94V14.42H332.112V47H329.412V38.42C328.452 41.06 326.752 43.24 324.312 44.96C321.912 46.64 319.012 47.48 315.612 47.48C312.572 47.48 309.852 46.8 307.452 45.44C305.092 44.04 303.232 42.08 301.872 39.56C300.552 37 299.892 34.04 299.892 30.68ZM329.412 30.68C329.412 27.84 328.812 25.34 327.612 23.18C326.452 20.98 324.852 19.3 322.812 18.14C320.772 16.94 318.492 16.34 315.972 16.34C313.332 16.34 311.012 16.92 309.012 18.08C307.012 19.2 305.452 20.84 304.332 23C303.212 25.16 302.652 27.72 302.652 30.68C302.652 33.64 303.212 36.2 304.332 38.36C305.452 40.52 307.012 42.18 309.012 43.34C311.052 44.5 313.372 45.08 315.972 45.08C318.492 45.08 320.772 44.5 322.812 43.34C324.892 42.14 326.512 40.46 327.672 38.3C328.832 36.1 329.412 33.56 329.412 30.68Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
<path d="M343.263 30.68C343.263 27.32 343.923 24.38 345.243 21.86C346.603 19.34 348.463 17.4 350.823 16.04C353.223 14.68 355.943 14 358.983 14C362.303 14 365.183 14.84 367.623 16.52C370.063 18.16 371.783 20.3 372.783 22.94V2.6H375.483V47H372.783V38.36C371.823 41.04 370.143 43.24 367.743 44.96C365.343 46.64 362.423 47.48 358.983 47.48C355.943 47.48 353.223 46.8 350.823 45.44C348.463 44.04 346.603 42.08 345.243 39.56C343.923 37 343.263 34.04 343.263 30.68ZM372.783 30.68C372.783 27.84 372.183 25.34 370.983 23.18C369.823 20.98 368.223 19.3 366.183 18.14C364.143 16.94 361.863 16.34 359.343 16.34C356.703 16.34 354.383 16.92 352.383 18.08C350.383 19.2 348.823 20.84 347.703 23C346.583 25.16 346.023 27.72 346.023 30.68C346.023 33.64 346.583 36.2 347.703 38.36C348.823 40.52 350.383 42.18 352.383 43.34C354.423 44.5 356.743 45.08 359.343 45.08C361.863 45.08 364.143 44.5 366.183 43.34C368.263 42.14 369.883 40.46 371.043 38.3C372.203 36.1 372.783 33.56 372.783 30.68Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)"/>
</svg>

    </div>
  );
}

export default IntroText;