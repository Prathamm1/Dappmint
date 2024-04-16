import Sidebar from "../components/Sidebar";
import Widgets from "../components/home/Widgets";
import ProfileTweets from "../components/profile/ProfileTweets";
import ProfileHeader from "../components/profile/ProfileHeader";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll no-scrollbar`,
};

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default profile;
