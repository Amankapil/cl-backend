import express from "express";

import {
  addWebInfo,
  // updateWebInfo,
  // remove,
  sendMailContact,
  sendMailCareer,
  Logout,
  getweb,
  Login,
  addWebInfoAbout,
  getwebHomeAbout,
  addWebInfoServices,
  getwebHomeservices,
  addWebInfoAboutHero,
  getWebAboutHero,
  addWebInfoAboutvision,
  getWebAboutVision,
  getWebAboutGuiding,
  addWebInfoAboutguiding,
  addWebInfoAboutTestimonial,
  getWebAbouttest,
  getWebAboutcrew,
  addWebInfoAboutcrew,
  addWebInfoAboutcrew_box,
  getWebAboutcrew_box,
  getWebAboutcase_study,
  addWebInfoAboutcaseStudy,
  getWebservicedo,
  addWebInfoservicewedo,
  addWebInfoserviceability,
  getWebserviceability,
  addWebInfoWork,
  getWebwork,
  getWebcareer,
  addWebInfocareer,
  addWebInfocareerwhyus,
  getWebcareerwhyusboxes,
  getWebcareerwhyus,
  addWebInfocareerwhyusBoxes,
  addWebInfocareerlifeat,
  getWebcareerlifeat,
  getWebcontact,
  addWebInfocontact,
  addWebInfoculsulting,
  getWebconsulting,
  getWebuserExperince,
  addWebInfouserExper,
  addWebInfoproducdev,
  getWebProducDev,
  getWebdigitalmarket,
  addWebInfodigitalmark,
  application,
  Enquery,
  addhomeimg,
  getclientimg,
  addjobs,
  getJobOpening,
  deleteJob,
  getclientdata,
  addclintdata,
} from "../ctrl/controller.js";

import multer from "multer";
import path from "path";

const router = express.Router();

router.get("/", getweb);
router.get("/homeAbout", getwebHomeAbout);
router.get("/homeServices", getwebHomeservices);
router.get("/aboutHero", getWebAboutHero);
router.get("/aboutvision", getWebAboutVision);
router.get("/aboutguiding", getWebAboutGuiding);
router.get("/abouttest", getWebAbouttest);
router.get("/aboutcrew", getWebAboutcrew);
router.get("/aboutcrew_box", getWebAboutcrew_box);
router.get("/aboutcaseStudy", getWebAboutcase_study);
router.get("/servicedo", getWebservicedo);
router.get("/serviceability", getWebserviceability);
router.get("/work", getWebwork);
router.get("/career", getWebcareer);
router.get("/careerwhyus", getWebcareerwhyus);
router.get("/careerBoxes", getWebcareerwhyusboxes);
router.get("/careerlifeat", getWebcareerlifeat);
router.get("/contact", getWebcontact);
router.get("/consulting", getWebconsulting);
router.get("/userexper", getWebuserExperince);
router.get("/producdev", getWebProducDev);
router.get("/digitalmarketing", getWebdigitalmarket);
router.get("/logout", Logout);
router.get("/application", application);
router.get("/enquery", Enquery);
router.get("/getcltimg", getclientimg);
router.get("/getjobopening", getJobOpening);
router.get("/getclientdata", getclientdata);

router.post("/add", addWebInfo);
router.post("/addAbout", addWebInfoAbout);
router.post("/addServices", addWebInfoServices);
router.post("/addaboutHero", addWebInfoAboutHero);
router.post("/addaboutvision", addWebInfoAboutvision);
router.post("/addaboutguiding", addWebInfoAboutguiding);
router.post("/addabouttest", addWebInfoAboutTestimonial);
router.post("/addaboutcrew", addWebInfoAboutcrew);
router.post("/addaboutcrew_box", addWebInfoAboutcrew_box);
router.post("/addaboutcaseStudy", addWebInfoAboutcaseStudy);
router.post("/addservicedo", addWebInfoservicewedo);
router.post("/addserviceability", addWebInfoserviceability);
router.post("/addwork", addWebInfoWork);
router.post("/addcareer", addWebInfocareer);
router.post("/addcareerwhyus", addWebInfocareerwhyus);
router.post("/addcareerwhyusBoxes", addWebInfocareerwhyusBoxes);
router.post("/addcareerlifeat", addWebInfocareerlifeat);
router.post("/addcontact", addWebInfocontact);
router.post("/addconsulting", addWebInfoculsulting);
router.post("/adduserexper", addWebInfouserExper);
router.post("/addproductdev", addWebInfoproducdev);
router.post("/adddigitalmark", addWebInfodigitalmark);
router.post("/addjobs", addjobs);
router.post("/addclintdata", addclintdata);
// router.post("/addblogpost", addblogpost);

router.delete("/jobs/:id", deleteJob);

// router.post("/uploads", addWebInfohomeHeroImages);

router.post("/login", Login);
router.post("/send_mail", sendMailContact);
router.post("/send_mail_career", sendMailCareer);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/addhomeimg");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post("/addhomeimg", upload.single("imagehome"), addhomeimg);

// router.get("/addhomeimg", addhomeimg);
// router.put("/update/:id", updateWebInfo);
// router.delete("/dele/:id", remove);

export default router;
