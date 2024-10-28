import { FunctionComponent, useMemo, type CSSProperties } from "react";

type SocialMediaType = {
  dimensions?: string;

  /** Style props */
  propFlexDirection?: CSSProperties["flexDirection"];
  propWidth?: CSSProperties["width"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];

  /** Action props */
  onSocialMediaLinkClick?: () => void;
};

const SocialMedia: FunctionComponent<SocialMediaType> = ({
  dimensions,
  propFlexDirection,
  propWidth,
  propMixBlendMode,
  onSocialMediaLinkClick,
}) => {
  const socialMediaLinkyoutubeStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const vectorIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      mixBlendMode: propMixBlendMode,
    };
  }, [propWidth, propMixBlendMode]);

  return (
    <div
      className="flex flex-col items-start justify-start cursor-pointer"
      onClick={onSocialMediaLinkClick}
      style={socialMediaLinkyoutubeStyle}
    >
      <img
        className="relative w-[41.3px] h-[30px]"
        alt=""
        src={dimensions}
        style={vectorIcon1Style}
      />
    </div>
  );
};

export default SocialMedia;
