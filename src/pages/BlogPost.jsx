import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogPreview from "../components/BlogPreview";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRightLong,
  FaArrowLeftLong,
  FaCopy,
} from "react-icons/fa6";
import { blogList, otherPost } from "../data/blogData";

function BlogPost() {
  // const location = useLocation()
  const param = useParams();
  const [content, setContent] = useState({});

  const getContent = (slug) => {
    let title = slug.replaceAll("-", " ");
    let content = blogList.filter((item) => title == item.title.toLowerCase());
    if (content[0]) {
      return content[0];
    } else {
      return otherPost.filter((item) => title == item.title.toLowerCase())[0];
    }
  };

  const copyContent = () => {
    navigator.clipboard.writeText(document.URL);
    window.alert("Link copied to clipboard");
  };

  console.log("Record", getContent(param.slug));

  useEffect(() => {
    setContent(getContent(param.slug));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [param]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <ScrollToTop />
      <NavigationBar />
      <div className="px-16 max-[675px]:px-6">
        <div className="flex flex-col justify-center items-center mt-[50px] md:mt-[102px] mb-[72px]">
          <h1 className="font-semibold text-[56px] md:leading-[70px] text-[#101828] text-center max-w-[20ch] max-[675px]:text-4xl">
            {content.title}
          </h1>
          <p className="font-semibold text-base leading-6 text-[#667085] text-center">
            Published {content.dateCreated}
          </p>
        </div>
        <div className="mb-[67px] w-full">
          <p className="font-normal text-xl leading-[35px] text-[#667085] mb-12 max-[675px]:text-base max-[675px]:leading-[25px]">
            Debt can be beneficial to your company when managed properly.
            However, if neglected or improperly managed, it may destroy you. We
            have worked with a variety of companies across a wide range of
            industries, and we have witnessed firsthand the potential
            effectiveness of the three debt management techniques exxplained in
            this piece.
          </p>
          <img
            className="w-full md:w-[90%] lg:w-[80%] h-[400px] mx-auto object-contain "
            src={content.thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col gap-12 mb-[30px]">
          <p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
            Effective use of and management of debt is a critical component of a
            business success. While it is true that there are 'good' types of
            debt, all liabilities necessitate constant monitoring. Small
            businesses operating under a company structure should be aware that
            the directors have a legal responsibility to make sure that the
            company's debts can be paid as and when they become due. Those
            conducting business under an unincorporated structure are ultimately
            personally responsible for the debts of the business.
            <br />
            <br />
            When managed properly, debt can be advantageous to your company.
            Debt, if neglected or improperly managed, may destroy you.
            <br />
            <br />
            Here are three tested and effective debt management techniques that
            help you grow your business:
            <br />
            <br />
          </p>
          <div>
            <h3 className=" font-semibold text-[28px] text-[#101828] leading-snug max-[675px]:text-[20px] max-[675px]:leading-[25px] ">
              1. Reconsider your Company's Budget
            </h3>
            <p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
              Gather as much information as you can about your current financial
              status before attacking your company's debt. Business owners
              frequently take this action after falling behind on their monthly
              payments. To offer yourself extra room in your budget, take a look
              at your previous financial strategy. Your income streams, variable
              expenses, and fixed costs should all be listed in a business
              budget. A cash flow budget should also be included to account for
              anticipated transactions not covered by profit and loss, such as
              loan repayments, ATO responsibilities, and owner returns.
            </p>
          </div>
          <div>
            <h3 className=" font-semibold text-[28px] text-[#101828] leading-snug max-[675px]:text-[20px]">
              2. Increase Cash Flow
            </h3>
            <p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
              Poorly managed cash flow can result in serious issues, such as
              difficulty fulfilling obligations on time, even in a thriving
              business.
              <br />
              <br />
              What methods can you employ to increase your cash flow?
              <br />
              <br />
              <ul className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
                <li>
                  &#x2022; Measurement and forecasting can help you stay on top
                  of your company's cash flow and projected cash needs by
                  comparing actual outcomes to your budget, comprehending and
                  addressing any deviations, and regularly adjusting
                  predictions.
                </li>
                <li>
                  &#x2022; Improve the administration of payables and
                  receivables by making sure that invoices for goods and
                  services are sent out on time, and by reviewing the credit
                  conditions that are offered to clients so that cash may be
                  received for sales more quickly. To follow up on past-due
                  monies, constantly review aged receivable records.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h3 className=" font-semibold text-[28px] text-[#101828] leading-snug max-[675px]:text-[20px]">
              3. Examine and Prioritise the Debts you Owe
            </h3>
            <p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
              Examine all of your existing debts, then begin to prioritize and
              make plans on how to reduce them.
              <br />
              <br />
              These could consist of, in no particular order:Suppliers; Revenue
              NSW (or other state OSR) liabilities, including payroll tax;
              Employer responsibilities, including Super Guarantee (SG); Bank
              loans, asset financing, or overdrafts;debts owed to the ATO, such
              as PAYGW, GST, and income tax.
              <br />
              <br />
              It's crucial to be aware that some obligations may have severe
              repercussions for late payment. For instance, employer Super
              Guarantee contributions are typically required to be made to each
              employee's chosen fund by 28 days following the end of each
              quarter, and there are heavy ATO penalties that apply for missing
              this deadline by even one day (via the Super Guarantee Charge).
            </p>
          </div>
          <div className="bg-[#F2F4F7] rounded-2xl p-6 max-[675px]:px-4 max-[675px]:py-2">
            <h3 className="font-semibold text-[28px] text-[#101828] leading-snug mb-6 max-[675px]:text-2xl max-[675px]:text-[20px]">
              Conclusion
            </h3>
            <p className="font-normal leading-[30px] text-lg text-[#667085] max-[675px]:text-base max-[675px]:leading-[25px]">
              In conclusion, don't wait until your business hits a financial
              crisis. If you feel that your debt has become unwieldy or
              worrisome, reach out to professionals to rescue the situation.
            </p>
          </div>
          <div>
            <hr className=" border-solid border-[1px] border-[#EAECF0] mb-6" />
            <div className="flex justify-between items-center max-[675px]:flex-col max-[675px]:items-start max-[675px]:gap-8">
              <div className="flex gap-3 mt-[34px]">
                <figure className="w-10 h-10 ">
                  <img
                    className="w-full rounded-full "
                    src={content.avatarImage}
                    alt=""
                  />
                </figure>
                <div>
                  <h5 className="leading-[18px] text-sm font-semibold text-[#101828]">
                    {content.author}
                  </h5>
                  <p className="text-[#667085] leading-[23px] text-sm font-normal">
                    Financial Analyst
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={copyContent}
                  className="text-[#344054] px-4 h-10 flex items-center gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border whitespace-nowrap"
                >
                  <FaCopy /> Copy Link
                </button>
                <button className="w-10 h-10 cursor-pointer text-[#344054] flex items-center justify-center gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border">
                  <FaXTwitter />
                </button>
                <button className="w-10 h-10 cursor-pointer text-[#344054] flex items-center justify-center gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border">
                  <FaFacebookF />
                </button>
                <button className="w-10 h-10 cursor-pointer text-[#344054] flex items-center justify-center gap-2 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border">
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
          </div>
          <div>
            <hr className=" border border border-[#EAECF0] mb-[30.5px]" />
            <div className="flex justify-between items-center text-[#667085] mb-2 mx-9">
              <button className="flex items-center gap-2 py-1 px-2 rounded-lg hover:border hover:border-black">
                <FaArrowLeftLong />
                Previous
              </button>
              <button className="flex items-center gap-2 py-1 px-2 rounded-lg hover:border hover:border-black">
                Next
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[#101828] font-semibold text-[40px] max-[675px]:text-[28px]">
            Other Posts You Should Read
          </h2>
        </div>
      </div>
      <div className="mt-14 mb-[25px]">
        <div className="px-8 max-w-7xl w-full  mx-auto max-[375px]:px-4">
          <div>
            <div className="flex flex-row flex-wrap items-center justify-center w-full gap-8">
              {otherPost.map((blogs) => (
                <div className=" w-[30%] max-lg:w-[46%] max-md:w-full max-sm:w-full">
                  <BlogPreview
                    key={blogs?.id}
                    title={blogs?.title}
                    category={blogs?.category}
                    highlight={blogs?.higlight}
                    author={blogs?.author}
                    dateCreated={blogs?.dateCreated}
                    thumbnail={blogs?.thumbnail}
                    avatarImage={blogs?.avatarImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-6">
        <Link to="/blogs">
          <div className=" bg-[#1570EF] border-[1px] border-solid border-[#1570EF] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-lg  py-3 px-5 text-[#FFFFFF]">
            View all posts
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;
