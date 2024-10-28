import { FunctionComponent, useCallback, useMemo, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";

type logoVar = '1' | '2' | '3' | '4';

interface logoPorps {
  logoVar?: logoVar;
}

const LUNALOGO: FunctionComponent<logoPorps> = ({ logoVar = '1'}) => {
  const navigate = useNavigate();
  const onHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  let content;
  
  switch (logoVar) {
    case '1':
    content =      
      <div className="flex items-center justify-center">
      <svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.53757 0H2.70789V8.27018C2.70789 9.6461 3.92768 10.0877 4.53757 10.1365H17.2356V8.27018H4.53757V0Z" fill="#F43F1C"/>
      <path d="M25.396 23.2736H23.0174L31.1047 15.1864L32.1659 14.1617C32.1659 14.1617 32.9188 13.4299 33.5198 13.4299C34.1209 13.4299 34.8738 14.1617 34.8738 14.1617L35.935 15.1864L43.9856 23.2736H41.5339L33.5198 15.1864L25.396 23.2736Z" fill="#F43F1C"/>
      <path d="M43.4733 0.0365786C43.4733 2.67641 42.4247 5.20812 40.558 7.07476C38.6914 8.9414 36.1597 9.99007 33.5198 9.99007C30.88 9.99007 28.3483 8.9414 26.4817 7.07476C24.615 5.20812 23.5663 2.67641 23.5663 0.0365801L25.316 0.0365799C25.316 2.21237 26.1803 4.29905 27.7188 5.83757C29.2574 7.37609 31.344 8.24042 33.5198 8.24042C35.6956 8.24042 37.7823 7.37609 39.3208 5.83757C40.8593 4.29905 41.7237 2.21237 41.7237 0.0365786H43.4733Z" fill="#F43F1C"/>
      <path d="M0 23.3834C2.30781e-07 20.7435 1.04867 18.2118 2.91531 16.3452C4.78195 14.4785 7.31366 13.4299 9.95349 13.4299C12.5933 13.4299 15.125 14.4785 16.9917 16.3452C18.8583 18.2118 19.907 20.7435 19.907 23.3834H18.1573C18.1573 21.2076 17.293 19.1209 15.7545 17.5824C14.216 16.0439 12.1293 15.1795 9.95349 15.1795C7.7777 15.1795 5.69102 16.0439 4.1525 17.5824C2.61398 19.1209 1.74965 21.2076 1.74965 23.3834H0Z" fill="#F43F1C"/>
      <path d="M24.3714 11.6734C24.3714 12.9264 23.3556 13.9422 22.1026 13.9422C20.8495 13.9422 19.8338 12.9264 19.8338 11.6734C19.8338 10.4203 20.8495 9.40456 22.1026 9.40456C23.3556 9.40456 24.3714 10.4203 24.3714 11.6734Z" fill="#F43F1C"/>
      </svg>
      </div>
    break;
    default: 
    content = 
        <div className="my-0 mx-[!important] flex flex-col items-center justify-center cursor-pointer text-[11.2px] group" onClick={onHome}>
        <div className="relative w-[61px] h-[41.5px]">
          <div className="absolute h-[100.48%] w-[90.16%] top-[0.24%] right-[-100.98%] bottom-[-0.72%] left-[110.82%] hidden group-hover:block">
            <div className="absolute top-[0%] left-[0%] tracking-[-0.01em] leading-[100.9%] font-extrabold"><p className="m-0">SAFE</p><p className="m-0">AND</p><p className="m-0">TRUSTED</p>
            </div>
            <div className="absolute top-[83.21%] left-[0%] text-[6.9px] tracking-[0.38em] leading-[100.9%]">BRAND</div>
          </div>
          <div className="absolute h-[82.41%] w-[94.75%] top-[10.84%] right-[5.25%] bottom-[6.75%] left-[0%] text-[14.8px]">
            <img className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full" alt="" src="/images/icons/lunalogo.svg"/>
            <div className="absolute top-[20%] left-[14%] tracking-[0.07em] font-black">LUNA</div>
          </div>
        </div>
      </div>;
  }
  return (<div className={`team-member ${logoVar}`}>{content}</div>);
};

export default LUNALOGO;