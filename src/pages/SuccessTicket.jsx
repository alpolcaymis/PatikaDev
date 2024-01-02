import BackButton from "../components/BackButton";
import { useCartContext } from "../context/cart-context";
import copyIcon from "../assets/svg/copy.svg";
import { useState } from "react";
function SuccessTicket() {
  const { lastCreatedTicketId } = useCartContext();
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  return (
    <div className="heading">
      <BackButton url="/ticket-search" />
      <h1>Thank you</h1>
      <h3>We recieved your application!</h3>
      <div className="flex justify-around ">
        <h3>
          <pre> Here is your CODE : </pre>
          <code className="bg-black text-emerald-300 font-extralight">
            {lastCreatedTicketId}
          </code>
        </h3>

        <div
          className="shareIconDiv hover:cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setShareLinkCopied(true);
            setTimeout(() => {
              setShareLinkCopied(false);
            }, 2000);
          }}
        >
          <img src={copyIcon} alt="" />
        </div>
      </div>

      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}
    </div>
  );
}

export default SuccessTicket;
