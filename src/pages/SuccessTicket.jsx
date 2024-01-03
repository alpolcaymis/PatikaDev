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
      <div>
        <p className="pb-2"> Here is your CODE : </p>
        <div className="flex justify-center items-center">
          <code
            className="bg-black hover:opacity-70 text-emerald-300 font-extralight py-2 px-4 rounded-md hover:cursor-pointer active:bg-slate-600 "
            onClick={() => {
              navigator.clipboard.writeText(lastCreatedTicketId);
              setShareLinkCopied(true);
              setTimeout(() => {
                setShareLinkCopied(false);
              }, 2000);
            }}
          >
            {lastCreatedTicketId}
          </code>
          <span
            className="hover:cursor-pointer bg-white pl-4"
            onClick={() => {
              navigator.clipboard.writeText(lastCreatedTicketId);
              setShareLinkCopied(true);
              setTimeout(() => {
                setShareLinkCopied(false);
              }, 2000);
            }}
          >
            <img src={copyIcon} alt="" />
          </span>
        </div>
      </div>

      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}
    </div>
  );
}

export default SuccessTicket;
