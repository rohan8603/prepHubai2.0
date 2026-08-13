import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Bot,
  Briefcase,
  PlayCircle,
  FileText,
  Sparkles,
} from "lucide-react";

function Home() {
  return (
    <div className="space-y-20">

      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-[2rem] px-6 py-14 md:px-14 shadow-sm"
      >
        {/* Background Decorations */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-5">
              <Sparkles size={17} />
              AI Powered Learning Platform
            </div>

            <p className="text-blue-600 font-bold mb-4">
              India's Smart Learning Platform
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-gray-900">
              Learn Smarter.
              <br />
              Achieve{" "}
              <span className="gradient-text">
                Better.
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-xl leading-8">
              Get access to university-wise notes, video lectures, PYQs,
              placement preparation and AI tutor — everything you need
              for your learning journey in one place.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link
                to="/universities"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition text-center"
              >
                Explore Universities →
              </Link>

              <Link
                to="/ai-assistant"
                className="bg-white text-blue-600 border border-blue-200 px-7 py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition text-center"
              >
                Ask AI Assistant ✨
              </Link>

            </div>

            {/* Students */}
            <div className="flex items-center gap-4 mt-8">

              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-sm">
                  👨‍🎓
                </div>

                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-sm">
                  👩‍🎓
                </div>

                <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-sm">
                  👨‍💻
                </div>

                <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-sm">
                  👩‍💻
                </div>
              </div>

              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">
                  10,000+
                </span>{" "}
                students learning smarter
              </p>

            </div>
          </div>


          {/* ================= RIGHT PHOTO ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Blue Glow */}
            <div className="absolute w-[400px] h-[500px] bg-blue-300/30 rounded-[4rem] blur-3xl" />

            {/* Main Background */}
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-50 rounded-[4rem] p-5 md:p-7">

              <img
                src="/prep-hub-profile.png"
                alt="PrepHub AI"
                className="relative w-[300px] md:w-[380px] lg:w-[400px] h-[430px] md:h-[500px] object-cover object-top rounded-[3rem] shadow-2xl"
              />

            </div>

            {/* Floating Notes Card */}
            <div className="absolute top-8 -left-2 md:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <BookOpen size={22} />
              </div>

              <div>
                <p className="font-bold text-gray-900">
                  Study Materials
                </p>
                <p className="text-xs text-gray-500">
                  Learn better
                </p>
              </div>
            </div>

            {/* Floating PYQ Card */}
            <div className="absolute top-40 -right-2 md:-right-8 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <FileText size={22} />
              </div>

              <div>
                <p className="font-bold text-gray-900">
                  Previous Years
                </p>
                <p className="text-xs text-gray-500">
                  Questions
                </p>
              </div>
            </div>

            {/* Floating AI Card */}
            <div className="absolute bottom-8 -left-2 md:-left-8 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <Bot size={22} />
              </div>

              <div>
                <p className="font-bold text-gray-900">
                  AI Tutor
                </p>
                <p className="text-xs text-gray-500">
                  24/7 Assistance
                </p>
              </div>
            </div>

          </div>

        </div>
      </motion.section>


      {/* ================= FEATURES STRIP ================= */}
      <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {[
            {
              icon: <BookOpen size={25} />,
              title: "Study Materials",
              desc: "Notes & Resources",
              color: "blue",
            },
            {
              icon: <PlayCircle size={25} />,
              title: "Video Lectures",
              desc: "Learn Visually",
              color: "green",
            },
            {
              icon: <FileText size={25} />,
              title: "Previous Year",
              desc: "Questions & PYQs",
              color: "purple",
            },
            {
              icon: <Briefcase size={25} />,
              title: "Practice & Tests",
              desc: "Improve Your Skills",
              color: "orange",
            },
            {
              icon: <Bot size={25} />,
              title: "AI Assistance",
              desc: "Smart Learning",
              color: "cyan",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition"
            >

              <div
                className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center
                ${
                  item.color === "blue"
                    ? "bg-blue-100 text-blue-600"
                    : item.color === "green"
                    ? "bg-green-100 text-green-600"
                    : item.color === "purple"
                    ? "bg-purple-100 text-purple-600"
                    : item.color === "orange"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-cyan-100 text-cyan-600"
                }`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>

            </div>

          ))}

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-white rounded-3xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {[
          ["50+", "Universities"],
          ["1000+", "Subjects"],
          ["5000+", "Notes & PDFs"],
          ["10K+", "Students"],
        ].map((item, index) => (

          <div key={index}>
            <h2 className="text-4xl font-extrabold text-blue-600">
              {item[0]}
            </h2>

            <p className="text-gray-600 mt-2">
              {item[1]}
            </p>
          </div>

        ))}

      </section>


      {/* ================= FEATURES ================= */}
      <section>

        <p className="text-center text-blue-600 font-bold mb-2">
          FEATURES
        </p>

        <h2 className="text-4xl font-extrabold text-center mb-12">
          Everything You Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: <GraduationCap size={32} />,
              title: "University Resources",
              desc: "University-wise subjects and semesters.",
            },
            {
              icon: <BookOpen size={32} />,
              title: "Study Materials",
              desc: "Notes, PDFs and PYQs in one place.",
            },
            {
              icon: <Bot size={32} />,
              title: "AI Assistant",
              desc: "Get instant AI-powered answers.",
            },
            {
              icon: <Briefcase size={32} />,
              title: "Placement Prep",
              desc: "Coding, aptitude and interview prep.",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl shadow p-7 card-hover"
            >

              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>
      </section>


      {/* ================= RESOURCES ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Placement */}
        <div className="bg-gradient-to-br from-purple-700 to-blue-700 text-white rounded-[2rem] p-10 shadow-xl">

          <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-5">
            PLACEMENT PREPARATION
          </p>

          <h2 className="text-4xl font-extrabold">
            Crack Your Dream Placement
          </h2>

          <p className="text-purple-100 mt-5">
            Aptitude, coding questions, interview questions,
            GD topics and more.
          </p>

          <Link
            to="/placement"
            className="inline-block bg-white text-blue-700 px-7 py-3 rounded-xl font-bold mt-8 hover:scale-105 transition"
          >
            Start Preparing →
          </Link>

        </div>


        {/* AI */}
        <div className="bg-white rounded-[2rem] p-10 shadow-xl">

          <p className="text-blue-600 font-bold mb-3">
            AI ASSISTANT
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900">
            Your Personal AI Tutor
          </h2>

          <p className="text-gray-600 mt-5">
            Ask any study doubt instantly with AI support.
          </p>

          <Link
            to="/ai-assistant"
            className="inline-block bg-blue-600 text-white px-7 py-3 rounded-xl font-bold mt-8 hover:bg-blue-700 transition"
          >
            Ask AI →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;