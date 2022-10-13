/**
 * FORMAT URL = DOMAIN/LOCALE/unsubscribe/?userId=866974914
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import {PageContainer, SectionContainer, ButtonContainer} from './UnsubscribeStyle';
import {ImageUnsubscribe} from "./image";

import { unsuscribeServices } from '../../services/unsuscribe';


import Loader from "../common/Loader";


const Unsubscribe = ({ data, activeDocMeta }) => {
  
  const router = useRouter();
  const [getId, setGetId] = useState(router?.query?.userId || "");
  const [step, setStep] = useState("step1");
  const [loading, setLoading] = useState(false);


const StepOne = () => <motion.div
  className={loading ? "unsub-content loading" : "unsub-content"}
  key="step-1"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
  >
    <ImageUnsubscribe className={""} />
    <h1>{data?.step_1_title[0]?.text || "Are you sure you want to unsubscribe?"}</h1>
    <p>{data?.step_1_description[0]?.text || "You'll be unsubscribing from marketing emails, but you'll still hear from us about your account and transfers."}</p>
    <div className="buttons-container">
      <ButtonContainer onClick={async ()=>{
        await unsubscribeHandler();
        setLoading(false);
        }} outline>
        {data?.step_1_unsubscribe_text[0]?.text || "Unsubscribe"}
      </ButtonContainer>
      <Link
        href={
          activeDocMeta.lang === "en-us"
            ? "/"
            : `/${activeDocMeta.lang}`
        }
        passHref
      >
        <ButtonContainer>
          {data?.step_1_nevermind_text[0]?.text || "Nevermind"}
        </ButtonContainer>
      </Link>
    </div>
  </motion.div>

const StepTwo = () => <motion.div
  className={loading ? "unsub-content loading" : "unsub-content"}
  key="step-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
  >
    <ImageUnsubscribe className={""} />
    <h1>{data.step_2_title[0]?.text || "Okay, you won't recieve any more marketing emails from us"}</h1>
    <div className="buttons-container">
      <Link
        href={
          activeDocMeta.lang === "en-us"
            ? "/"
            : `/${activeDocMeta.lang}`
        }
        passHref
      >
        <ButtonContainer outline>
          {data?.step_2_home_text[0]?.text || "Take me home"}
        </ButtonContainer>
      </Link>
    </div>
  </motion.div>
  
  const unsubscribeHandler = async () => {
    setLoading(true);
    try {
      const request = await unsuscribeServices(router?.query?.userId || "");
      setStep("step2");
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect( () => {
    const getIdURL= async ()=> {
     try {
      if(getId==="") setGetId(router?.query?.userId || "");

     }catch(error){
       console.log('error', error)
     }
   }

   getIdURL()
},[step]);

  return (
    <PageContainer>
      <SectionContainer>
        <AnimatePresence exitBeforeEnter>
          {loading && (
            <motion.div
              className="loading-overlay"
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Loader />
            </motion.div>
          )}

          {!loading && (

            step === "step1" ? <StepOne/>
            :step === "step2" ? <StepTwo/>:<StepOne/>

          )}

        </AnimatePresence>
      </SectionContainer>
    </PageContainer>
  );
};

export default Unsubscribe;
