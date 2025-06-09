import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Copy } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GradientButton from "../UIComponents/GradientButton";
import { IoPerson } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
const Support = () => {
  const [tickets, setTickets] = useState<
    { id: string; category: string; description: string; file?: string }[]
  >([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const [messages, setMessages] = useState<
    Record<string, { text: string; time: string }[]>
  >({});
  const [messageInputs, setMessageInputs] = useState<Record<string, string>>(
    {}
  );

  const handleSendMessage = (ticketId: string) => {
    if (!messageInputs[ticketId]?.trim()) return; 

    setMessages((prev) => ({
      ...prev,
      [ticketId]: [
        ...(prev[ticketId] || []),
        { text: messageInputs[ticketId], time: new Date().toLocaleString() },
      ],
    }));

    setMessageInputs((prev) => ({
      ...prev,
      [ticketId]: "",
    }));
  };

  // const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleCopy = (ticketId: string) => {
    navigator.clipboard.writeText(ticketId);
    toast.success("Ticket ID Copied!");
  };

  const handleSubmit = () => {
    if (!category || !description) {
      toast.error("Please fill all required fields.");
      return;
    }

    const newTicket = {
      id: `TICKET-${Date.now()}`,
      category,
      description,
      file: fileName || "",
    };
    setTickets([...tickets, newTicket]);

    // Reset form fields
    setCategory("");
    setDescription("");
    setFileName(null);
  };

  return (
    <div className="mt-11 md:mt-0">
      <ToastContainer />
      <div className="bg-[#D3C5E5] rounded-3xl p-[1.02px]">
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 relative rounded-3xl dark:bg-themeBlack bg-white">
          {/* Form */}
          <div className="bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] p-[1.02px] rounded-lg ">
          <div className="p-4 rounded-lg dark:bg-themeBlack bg-white h-full">
            <p className="bg-[#D3C5E5] 
                   bg-clip-text text-transparent text-lg font-bold">Submit a Request</p>
            <div className="mt-5">
              <div className="deposit-detail mb-4">
                <label className="dark:text-titleGray">Ticket For</label>
                <select
                  className="border border-[#4343434D] rounded-lg p-2 text-gray-700 w-full mt-2 h-11 dark:bg-[#FFFFFF4D] dark:text-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" className="dark:bg-black">Select Category</option>
                  <option className="dark:bg-black">Login Issue</option>
                  <option className="dark:bg-black">Deposit Issue</option>
                  <option className="dark:bg-black">Withdraw Issue</option>
                  <option className="dark:bg-black">2FA</option>
                  <option className="dark:bg-black">Register Issue</option>
                  <option className="dark:bg-black">Credit Application</option>
                </select>

                <div className="mt-3">
                  <label className="dark:text-titleGray">Description</label>
                  <textarea
                    className="border border-[#4343434D] rounded-lg p-4 mt-2 text-gray-700 w-full dark:bg-[#FFFFFF4D] dark:text-white"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <p className="text-xs dark:text-[#C0C0C0]">
                    Please enter the details of your request. A member of our
                    support staff will respond as soon as possible.
                  </p>
                </div>

                {/* File Upload */}
                <div className="mt-4">
                  <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium dark:text-titleGray">
                      Upload Document (Optional)
                    </label>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="fileInput"
                    />
                    <label
                      htmlFor="fileInput"
                      className="relative text-center cursor-pointer rounded-lg bg-[#D3C5E5] p-[1px] w-28 h-10"
                    >
                      <span className="bg-white dark:bg-black dark:text-white  w-full h-full rounded-lg flex items-center justify-center">
                      Upload
                      </span>
                    </label>
<p className="dark:text-[#C0C0C0] text-[15px]">Max. upload file size 1MB (Jpeg, Png, Pdf ,Jpg only).</p>
                    {fileName && (
                      <p className="text-sm bg-[#D3C5E5] 
                   bg-clip-text text-transparent mt-1">
                        Selected file: {fileName}
                      </p>
                    )}
                  </div>
                  <div className="mt-7">
                    <GradientButton
                      text="Submit"
                      className="w-full p-3 hover:!bg-white"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* Ticket Details */}
          <div className="p-4">
            <p className="bg-[#D3C5E5] 
                   bg-clip-text text-transparent text-lg font-bold">
              Support Ticket Details
            </p>
            <div className="mt-5">
            <div className="relative w-full">
  <input
    placeholder="Search"
    className="p-2 pr-10 rounded-md w-full focus-visible:outline-none border border-[#4343434D] bg-white dark:text-white dark:bg-[#FFFFFF4D]"
  />
  <svg
    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 dark:text-[#C0C0C0] dark:text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</div>
            </div>
            {tickets.length === 0 ? (
              <p className="dark:text-[#C0C0C0] sm:mt-6 mt-20 text-center">No Tickets found</p>
            ) : (
              tickets.map((ticket, index) => (
                <div key={index} className="mt-4">
                  <div
                    className="p-4 flex justify-between items-center cursor-pointer rounded-t-lg"
                    onClick={() =>
                      setAccordionOpen(accordionOpen === index ? null : index)
                    }
                  >
                    <p className="font-semibold text-sm dark:text-white">
                      Sub: {ticket.category}
                    </p>
                    <p className="text-sm dark:text-white">
                      <span className="font-semibold">Ticket ID:</span>{" "}
                      {ticket.id}
                      <button
                        className="ml-2 p-1 bg-white-700 text-sm rounded hover:bg-gray-600 dark:text-white"
                        onClick={() => handleCopy(ticket.id)}
                      >
                        <Copy size={16} />
                      </button>
                    </p>
                    {accordionOpen === index ? (
                      <FaChevronUp className="dark:text-white"  />
                    ) : (
                      <FaChevronDown className="dark:text-white" />
                    )}
                  </div>

                  {accordionOpen === index && (
                    <div className="p-4 rounded-b-lg">
                        <div className="min-h-[50vh] overflow-auto">
                      <div className="inbox-chat bg-white border border-[#4343434D] p-5 rounded-lg w-full dark:bg-[#FFFFFF4D] dark:text-white">
                        <div className="flex gap-2">
                          <IoPerson />
                        </div>
                        <p className="mt-2">{ticket.description}</p>
                      </div>
                      <div className="mt-4 space-y-2">
                        {messages[ticket.id]?.map((msg, i) => (
                            
                          <div
                            key={i}
                            className="bg-white border-[#4343434D] p-5 rounded-lg w-full dark:bg-[#FFFFFF4D] border dark:text-white"
                          >
                            <div className="flex gap-2">
                              <IoPerson />
                              <span className="text-xs dark:text-[#C0C0C0] dark:text-white">
                                {msg.time}
                              </span>
                            </div>
                            <p className="mt-5">{msg.text}</p>
                            
                          </div>
                        ))}
                      </div>
                      </div>
                      <div className="mt-4 relative">
                        <input
                          className="border border-[#4343434D] rounded-lg p-4 w-full h-11 dark:bg-[#FFFFFF4D] dark:text-white" 
                          placeholder="Type a message..."
                          value={messageInputs[ticket.id] || ""}
                          onChange={(e) =>
                            setMessageInputs({
                              ...messageInputs,
                              [ticket.id]: e.target.value,
                            })
                          }
                        />
                        <div className="text-end absolute bottom-[0.45rem] right-4 dark:text-white">
                        <button onClick={() => handleSendMessage(ticket.id)}>
                        <IoIosSend />
                        </button>
                        </div>
                       
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
