import type { NextPage } from "next";
import {
  useRef,
  useState,
  FormEvent,
  MutableRefObject,
  useEffect,
} from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
const Concat: NextPage = () => {
  const [token, setToken] = useState(false);
  const form = useRef() as MutableRefObject<HTMLFormElement>;
  // const [url, setUrl] = useState();

  // useEffect(() => {
  //   const currentDate = new Date();
  //   const startYear = currentDate.getFullYear() - 10;
  //   const endYear = currentDate.getFullYear();
  //   const urls = [];
  //   const fetchData = async () => {
  //     let currentYear = startYear;

  //     while (currentYear <= endYear) {
  //       try {
  //         const res = await axios.get(
  //           `http://archive.org/wayback/available?url=naver.com&timestamp=${currentYear}0101`
  //         );
  //         urls.push({
  //           time: currentYear,
  //           url: res.data.archived_snapshots.closest.url,
  //         });

  //         console.log(currentYear);
  //       } catch (error) {
  //         console.log("currentYear");
  //       }
  //       currentYear++;
  //     }
  //     setUrl(urls);
  //   };

  //   fetchData();
  // }, []);

  // JSON 데이터 가져오기
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleNextStep = () => {
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    }
  };
  const handleCheckboxChange = (e, stepId, optionId) => {
    const { checked } = e.target;
    setFormData((prevData) => {
      const updatedOptions = checked
        ? [...(prevData[`step-${stepId}`] || []), optionId]
        : (prevData[`step-${stepId}`] || []).filter((id) => id !== optionId);
      return {
        ...prevData,
        [`step-${stepId}`]: updatedOptions,
      };
    });
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const selectedOptions = prevData[name] || [];
        const updatedOptions = checked
          ? [...selectedOptions, value]
          : selectedOptions.filter((option) => option !== value);

        return {
          ...prevData,
          [name]: updatedOptions,
        };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "radio" ? Number(value) : value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 필드 유효성 검사 로직
    // 필요한 경우 각 스텝에 맞게 유효성 검사를 추가하세요.

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://assets.cdn.soomgo.com/data/exam/mock/input_clean.json"
      );

      setFormData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  if (!formData.items) {
    return <div>Loading form...</div>;
  }

  const steps = formData.items;
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
  console.log(formData);
  return (
    <section w-h="min-100vh full" id="concat" w-pos="relative">
      <div
        w-p="x-10  t-22 <lg:x-10"
        w-container="~"
        w-m="x-auto"
        w-flex="~ col"
        w-justify="center"
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          w-pos="absolute inset-0 -top-1px"
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

{/* <div>
<form onSubmit={handleFormSubmit}>
  {steps.map((step, index) => {
    if (index + 1 === currentStep) {
      return (
        <div key={step.itemId}>
          <h3>{step.title}</h3>
          {step.formType === "checkbox" && (
            <div>
              {step.options.map((option) => (
                <label key={option.id}>
                  <input
                    type="checkbox"
                    name={`step-${step.itemId}`}
                    value={option.id}
                    checked={(
                      formData[`step-${step.itemId}`] || []
                    ).includes(String(option.id))}
                    onChange={(e) => handleInputChange(e)}
                  />
                  {option.text}
                </label>
              ))}
            </div>
          )}
          {step.formType === "select" && (
            <div>
              {step.options.map((option) => (
                <label key={option.id}>
                  <input
                    type="radio"
                    name={`step-${step.itemId}`} // 동일한 name 속성 부여
                    value={option.id}
                    checked={
                      formData[`step-${step.itemId}`] ===
                      Number(option.id)
                    }
                    onChange={(e) => handleInputChange(e)}
                  />
                  {option.text}
                </label>
              ))}
            </div>
          )}
     
          {currentStep > 1 && (
            <button type="button" onClick={handlePreviousStep}>
              Previous
            </button>
          )}
          {currentStep < steps.length && (
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          )}
          {currentStep === steps.length && (
            <button type="submit">Submit</button>
          )}
        </div>
      );
    }
    return null;
  })}
</form>
</div> */}
export default Concat;
