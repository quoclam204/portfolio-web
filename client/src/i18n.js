import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      "nav": {
        "Home": "Home",
        "AboutMe": "About Me",
        "Resume": "Resume",
        "Skills": "Skills",
        "Projects": "Projects",
        "ContactMe": "Contact Me"
      },
      "profile": {
        "hello": "Hello, I'm",
        "tagline": "I love building backend systems and learning new tech.",
        "hireMe": "Hire Me",
        "getResume": "Get Resume"
      },
      "aboutMe": {
        "title": "About Me",
        "subHeading": "Why Choose Me?",
        "description": "I am a backend-focused developer currently majoring in Software Engineering at Dalat University. I am passionate about building efficient and scalable web applications, continuously learning modern technologies, and improving myself as a software engineer every day.",
        "email": "Email :",
        "place": "Place :"
      },
      "resume": {
        "title": "Resume",
        "subHeading": "My formal Bio Details",
        "education": "Education",
        "workHistory": "Work History",
        "interests": "Interests",
        "eduSchool": "Dalat University",
        "eduDegree": "Information Technology Engineer, Major in Software Engineering",
        "workTitle": "Academic & Personal Projects",
        "workDesc1": "Gained hands-on experience in web backend and full-stack development following a client-server architecture through academic and personal projects.",
        "workDesc2": "- Built e-commerce websites using ASP.NET MVC and ASP.NET Core with SQL Server and MySQL.",
        "workDesc3": "- Developed RESTful APIs and integrated frontend using React.js.",
        "workDesc4": "- Deployed frontend using Azure Static Web Apps and backend using Azure App Service.",
        "workDesc5": "- Deployed database using Azure Database for MySQL.",
        "workDesc6": "- Configured CI/CD pipelines with GitHub Actions for automated build and deployment.",
        "workDesc7": "- Created an Android chat application using Java and Firebase.",
        "intMusic": "Music",
        "intMusicDesc": "I enjoy listening to music while coding to stay focused and motivated.",
        "intRest": "Rest & Relaxation",
        "intRestDesc": "Getting enough rest helps me recharge and maintain productivity.",
        "intCode": "Coding Practice",
        "intCodeDesc": "I spend free time practicing coding and learning new technologies."
      },
      "skills": {
        "title": "Skills",
        "subHeading": "My Technical Skills",
        "languages": "Languages",
        "frameworks": "Frameworks & Platforms",
        "webAndDb": "Web & Database"
      },
      "projects": {
        "title": "Projects",
        "subHeading": "My Recent Works",
        "view": "View",
        "code": "Code",
        "desc1": "A full-stack e-commerce platform with shopping cart and payment integration",
        "desc2": "A collaborative task management application with real-time updates",
        "desc3": "Real-time weather information with interactive maps and forecasts",
        "desc4": "E-commerce platform for tech products built with ASP.NET MVC architecture",
        "desc5": "Automated workflow tool to streamline daily tasks and improve productivity",
        "desc6": "Scalable data processing pipeline for ETL operations and analytics"
      },
      "footer": {
        "title": "Nguyen Le Quoc Lam",
        "subtitle": "Backend Web Developer",
        "quickLinks": "Quick Links",
        "connect": "Connect With Me",
        "rights": "Nguyen Le Quoc Lam. All rights reserved."
      },
      "contact": {
        "title": "Contact Me",
        "subHeading": "Lets Keep In Touch",
        "getInTouch": "Get In Touch 📧",
        "sendEmail": "Send Your Email Here!",
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "send": "send"
      }
    }
  },
  VN: {
    translation: {
      "nav": {
        "Home": "Trang Chủ",
        "AboutMe": "Về Tôi",
        "Resume": "Lý Lịch",
        "Skills": "Kỹ Năng",
        "Projects": "Dự Án",
        "ContactMe": "Liên Hệ"
      },
      "profile": {
        "hello": "Xin chào, tôi là",
        "tagline": "Tôi yêu thích xây dựng hệ thống backend và học hỏi công nghệ mới.",
        "hireMe": "Tuyển Dụng",
        "getResume": "Tải CV"
      },
      "aboutMe": {
        "title": "Về Tôi",
        "subHeading": "Tại sao chọn tôi?",
        "description": "Tôi là một lập trình viên thiên về backend, hiện đang học chuyên ngành Kỹ thuật Phần mềm tại trường Đại học Đà Lạt. Tôi đam mê xây dựng các ứng dụng web hiệu quả và có khả năng mở rộng, không ngừng học hỏi công nghệ mới và cải thiện bản thân mỗi ngày.",
        "email": "Email :",
        "place": "Địa điểm :"
      },
      "resume": {
        "title": "Lý Lịch",
        "subHeading": "Thông tin chi tiết",
        "education": "Học vấn",
        "workHistory": "Kinh nghiệm",
        "interests": "Sở thích",
        "eduSchool": "Đại học Đà Lạt",
        "eduDegree": "Kỹ sư Công nghệ thông tin, Chuyên ngành Kỹ thuật phần mềm",
        "workTitle": "Dự án cá nhân & Học tập",
        "workDesc1": "Tích lũy kinh nghiệm thực tế trong phát triển web backend và full-stack theo kiến trúc client-server thông qua các dự án cá nhân và học tập.",
        "workDesc2": "- Xây dựng website thương mại điện tử bằng ASP.NET MVC và ASP.NET Core với SQL Server và MySQL.",
        "workDesc3": "- Phát triển RESTful APIs và tích hợp frontend bằng React.js.",
        "workDesc4": "- Triển khai frontend sử dụng Azure Static Web Apps và backend dùng Azure App Service.",
        "workDesc5": "- Triển khai cơ sở dữ liệu trên Azure Database cho MySQL.",
        "workDesc6": "- Cấu hình pipeline CI/CD với GitHub Actions để tự động build và deploy.",
        "workDesc7": "- Tạo ứng dụng chat Android bằng Java và Firebase.",
        "intMusic": "Âm nhạc",
        "intMusicDesc": "Tôi thích nghe nhạc trong khi code để giữ sự tập trung và động lực.",
        "intRest": "Nghỉ ngơi & Thư giãn",
        "intRestDesc": "Nghỉ ngơi đầy đủ giúp tôi nạp lại năng lượng và duy trì hiệu suất công việc.",
        "intCode": "Thực hành Code",
        "intCodeDesc": "Tôi dành thời gian rảnh rỗi để thực hành code và học thêm công nghệ mới."
      },
      "skills": {
        "title": "Kỹ Năng",
        "subHeading": "Kỹ năng chuyên môn",
        "languages": "Ngôn ngữ",
        "frameworks": "Frameworks & Nền tảng",
        "webAndDb": "Web & Cơ sở dữ liệu"
      },
      "projects": {
        "title": "Dự Án",
        "subHeading": "Dự án gần đây",
        "view": "Xem",
        "code": "Mã nguồn",
        "desc1": "Nền tảng thương mại điện tử full-stack với giỏ hàng và tích hợp thanh toán",
        "desc2": "Ứng dụng quản lý công việc trực tuyến với cập nhật thời gian thực",
        "desc3": "Thông tin thời tiết theo thời gian thực với bản đồ và dự báo",
        "desc4": "Nền tảng thương mại điện tử cho sản phẩm công nghệ xây dựng với kiến trúc ASP.NET MVC",
        "desc5": "Công cụ tự động hóa quy trình làm việc để cải thiện năng suất",
        "desc6": "Pipeline xử lý dữ liệu mở rộng cho các hoạt động ETL và phân tích"
      },
      "footer": {
        "title": "Nguyễn Lê Quốc Lâm",
        "subtitle": "Lập trình viên Web Backend",
        "quickLinks": "Đường dẫn nhanh",
        "connect": "Kết nối với tôi",
        "rights": "Nguyễn Lê Quốc Lâm. Bảo lưu mọi quyền."
      },
      "contact": {
        "title": "Liên Hệ",
        "subHeading": "Giữ liên lạc nhé",
        "getInTouch": "Kết Nối 📧",
        "sendEmail": "Gửi Email tại đây!",
        "name": "Tên",
        "email": "Email",
        "message": "Tin nhắn",
        "send": "gửi"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "VN", // default language
    fallbackLng: "EN",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
