import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CampaignIcon from '@mui/icons-material/Campaign';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Sidebar, SidebarState } from '@rewind-ui/core';

function SideBar(props) {
  const clearAuth = () => {
    localStorage.clear();
  };
  return (
    <Sidebar
      onToggle={(state: SidebarState) => {
        props.onExpand(state.expanded);
        props.onMobile(state.mobile);
      }}
      className="absolute"
    >
      <Sidebar.Head>
        <Sidebar.Head.Title className="text-3xl p-8">Coligo</Sidebar.Head.Title>
      </Sidebar.Head>

      <Sidebar.Nav className="h-screen">
        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Item
            icon={<DashboardIcon />}
            label="Dashboard"
            className="hover:bg-blue-700"
            href="#"
            active
          />
          <Sidebar.Nav.Section.Item
            icon={<CalendarMonthIcon />}
            label="Schedule"
            className="hover:bg-blue-700"
            href="#"
          />
          <Sidebar.Nav.Section.Item
            className="hover:bg-blue-700"
            icon={<ArticleIcon />}
            label="Courses"
            href="#"
          />
          <Sidebar.Nav.Section.Item
            className="hover:bg-blue-700"
            icon={<SchoolIcon />}
            label="Gradebook"
            href="#"
          />

          <Sidebar.Nav.Section.Item
            icon={<TrendingUpIcon />}
            label="Performance"
            className="hover:bg-blue-700"
            href="#"
          />
          <Sidebar.Nav.Section.Item
            icon={<CampaignIcon />}
            className="hover:bg-blue-700"
            label="Announcements"
            href="#"
          />
        </Sidebar.Nav.Section>
        <Sidebar.Footer>
          <div className="flex flex-col justify-center items-center text-sm py-10">
            <a href="/">
              <button
                onClick={clearAuth}
                className="m-auto w-32 py-3 rounded-full bg-blue-700 text-white"
              >
                Logout
              </button>
            </a>
          </div>
        </Sidebar.Footer>
      </Sidebar.Nav>
    </Sidebar>
  );
}

export default SideBar;
