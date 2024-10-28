import { FunctionComponent } from "react";
import Header from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";

const Blog: FunctionComponent = () => {
  return (
    <div className="relative bg-base-blacks-var-2 w-full flex flex-col items-start justify-start gap-[15px] text-left text-lg text-base-whites-var-1 font-Poppins">
      <Header />
      <div className="self-stretch flex flex-col items-start justify-center pt-[50px] px-5 pb-5 gap-[20px]">
        <div className="relative text-29xl">Articles</div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row items-start justify-start p-5 gap-[20px] border-[1px] border-solid border-base-greys-var-1">
          <div className="self-stretch relative bg-base-whites-var-2 w-[350px]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative text-13xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="self-stretch relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative [text-decoration:underline]">
                Read article
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row items-start justify-start p-5 gap-[20px] border-[1px] border-solid border-base-greys-var-1">
          <div className="self-stretch relative bg-base-whites-var-2 w-[350px]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative text-13xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="self-stretch relative whitespace-pre-wrap">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.  `}</div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative [text-decoration:underline]">
                Read article
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row items-start justify-start p-5 gap-[20px] border-[1px] border-solid border-base-greys-var-1">
          <div className="self-stretch relative bg-base-whites-var-2 w-[350px]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative text-13xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="self-stretch relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative [text-decoration:underline]">
                Read article
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center p-5 gap-[20px]">
        <div className="relative text-29xl">Publications</div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row items-start justify-start p-5 gap-[20px] border-[1px] border-solid border-base-greys-var-1">
          <div className="self-stretch relative bg-base-whites-var-2 w-[350px]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative text-13xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="self-stretch relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative [text-decoration:underline]">
                Read article
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row items-start justify-start p-5 gap-[20px] border-[1px] border-solid border-base-greys-var-1">
          <div className="self-stretch relative bg-base-whites-var-2 w-[350px]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative text-13xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="self-stretch relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative [text-decoration:underline]">
                Read article
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-base-blacks-var-2 flex flex-row items-start justify-start p-5 gap-[20px] border-[1px] border-solid border-base-greys-var-1">
          <div className="self-stretch relative bg-base-whites-var-2 w-[350px]" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative text-13xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className="self-stretch relative">{`ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis at tellus. Sed nisi lacus sed viverra. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. `}</div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative [text-decoration:underline]">
                Read article
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
