import { FunctionComponent, useCallback } from "react";
import ActionIcons from "./ActionIcons";
import SocialMedia from "./SocialMedia";

const Icons: FunctionComponent = () => {
  const onSocialMediaLinkinstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/luna4africa/");
  }, []);

  const onSocialMediaLinklinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/company/luna4africa/");
  }, []);

  const onSocialMediaLinkfacebookClick = useCallback(() => {
    window.open("https://web.facebook.com/luna4africa");
  }, []);

  const onSocialMediaLinktwitterClick = useCallback(() => {
    window.open("https://twitter.com/luna4africa");
  }, []);

  const onSocialMediaLinktiktokClick = useCallback(() => {
    window.open("https://www.tiktok.com/@luna4africa");
  }, []);

  const onSocialMediaLinkyoutubeClick = useCallback(() => {
    window.open("https://www.youtube.com/@luna4africa");
  }, []);

  return (
    <div className="bg-base-blacks-var-2 overflow-hidden flex flex-col items-start justify-start p-5 gap-[50px]">
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-center justify-start p-5 gap-[20px]">
        <ActionIcons
          vector="/menudrawer.svg"
          propOverflow="unset"
          propBorder="none"
          propBackgroundColor="transparent"
          propPadding="10px"
          propWidth="30px"
          propBorderRadius="unset"
          propHeight="20px"
        />
        <ActionIcons
          vector="/vector-3.svg"
          propOverflow="unset"
          propBorder="unset"
          propBackgroundColor="unset"
          propPadding="10px"
          propWidth="20px"
          propBorderRadius="2px"
          propHeight="20px"
        />
        <ActionIcons
          vector="/vector.svg"
          propOverflow="hidden"
          propBorder="unset"
          propBackgroundColor="unset"
          propPadding="10px"
          propWidth="20px"
          propBorderRadius="unset"
          propHeight="20px"
        />
        <ActionIcons
          vector="/vector-3.svg"
          propOverflow="unset"
          propBorder="unset"
          propBackgroundColor="unset"
          propPadding="10px"
          propWidth="20px"
          propBorderRadius="2px"
          propHeight="20px"
        />
        <ActionIcons
          vector="/vector.svg"
          propOverflow="unset"
          propBorder="unset"
          propBackgroundColor="unset"
          propPadding="unset"
          propWidth="12px"
          propBorderRadius="unset"
          propHeight="12px"
        />
        <ActionIcons
          vector="/vector.svg"
          propOverflow="hidden"
          propPadding="10px"
          propWidth="20px"
          propHeight="20px"
        />
      </div>
      <div className="rounded-8xs bg-base-blacks-var-2 overflow-hidden flex flex-row items-start justify-start p-5 gap-[20px]">
        <SocialMedia
          dimensions="/vector.svg"
          propFlexDirection="column"
          propWidth="30px"
          propMixBlendMode="unset"
          onSocialMediaLinkyoutubeClick={onSocialMediaLinkinstagramClick}
        />
        <SocialMedia
          dimensions="/vector.svg"
          propFlexDirection="row"
          propWidth="30px"
          propMixBlendMode="unset"
          onSocialMediaLinkyoutubeClick={onSocialMediaLinklinkedinClick}
        />
        <SocialMedia
          dimensions="/vector.svg"
          propFlexDirection="column"
          propWidth="30.2px"
          propMixBlendMode="normal"
          onSocialMediaLinkyoutubeClick={onSocialMediaLinkfacebookClick}
        />
        <SocialMedia
          dimensions="/vector.svg"
          propFlexDirection="column"
          propWidth="36.9px"
          propMixBlendMode="unset"
          onSocialMediaLinkyoutubeClick={onSocialMediaLinktwitterClick}
        />
        <SocialMedia
          dimensions="/union.svg"
          propFlexDirection="row"
          propWidth="26.9px"
          propMixBlendMode="unset"
          onSocialMediaLinkyoutubeClick={onSocialMediaLinktiktokClick}
        />
        <SocialMedia
          dimensions="/vector.svg"
          propFlexDirection="column"
          propWidth="41.3px"
          onSocialMediaLinkyoutubeClick={onSocialMediaLinkyoutubeClick}
        />
      </div>
    </div>
  );
};

export default Icons;
