import type { NextPage } from "next";
import { useRef, useState, FormEvent, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
const Concat: NextPage = () => {
  const [token, setToken] = useState(false);
  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const submitFormAndShowCaptcha = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToken(true);
  };
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_5a6suvo",
        "template_g32fg9g",
        form.current,
        "P8-NqNrQDPedLB2nB"
      )
      .then(
        (result) => {
          setToken(false);
          alert("전송이 완료 되었습니다.\n감사합니다 ^^");
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <section w-h="min-100vh full" id="concat" w-pos="relative">
      <div
        w-p="x-10 t-20 <lg:x-10"
        w-container="~"
        w-m="x-auto"
        w-flex="~ col"
        w-justify="center"
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          w-pos="absolute inset-0"
          w-w="full"
          w-h="260px <md:230px"
        >
          <path
            d="M0.00,92.27 C116.83,202.92 300.30,20.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#335288" }}
          ></path>
        </svg>
        <div w-font="game " w-text="left white 3xl <md:center" w-z="1">
          <span w-text="mpink">C</span>ontact
          <span w-text="mpink"> M</span>e
        </div>
        <form ref={form} onSubmit={submitFormAndShowCaptcha}>
          <div
            w-container="~"
            w-m="auto"
            w-h="full"
            w-flex="~ col"
            w-justify="between"
            w-gap="5"
            w-p="t-40 <md:t-25"
          >
            <div>
              <input
                placeholder="이름, 제목"
                name="name"
                w-text="black"
                w-p="x-2 y-1"
                w-w="full"
                w-border="rounded-xl"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                w-text="black"
                w-p="x-2 y-1"
                w-w="full"
                w-border="rounded-xl"
              />
            </div>
            <div>
              <textarea
                placeholder="내용"
                name="message"
                w-text="black"
                w-p="x-2 y-1"
                w-w="full"
                w-h="min-200px"
                w-border="rounded-xl"
              />
            </div>

            {token ? (
              <ReCAPTCHA
                w-m="x-auto"
                sitekey={"6LdNg1YiAAAAAElJIVki280y9SV_MsZpje1GodUi"}
                onChange={sendEmail}
              />
            ) : (
              <button
                type="submit"
                w-m="x-auto"
                value="Send"
                w-p="x-6 y-1"
                w-border="rounded-xl"
                w-bg="mblue"
              >
                전송
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Concat;
