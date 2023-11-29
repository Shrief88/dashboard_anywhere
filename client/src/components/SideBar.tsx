import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CampaignIcon from '@mui/icons-material/Campaign';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Sidebar, SidebarState } from '@rewind-ui/core';

function SideBar(props) {
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

      <Sidebar.Nav>
        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Item
            icon={<DashboardIcon />}
            label="Dashboard"
            href="#"
            active
          />
          <Sidebar.Nav.Section.Item
            icon={<CalendarMonthIcon />}
            label="Schedule"
            href="#"
          />
          <Sidebar.Nav.Section.Item icon={<ArticleIcon />} label="Courses" href="#" />
          <Sidebar.Nav.Section.Item icon={<SchoolIcon />} label="Gradebook" href="#" />

          <Sidebar.Nav.Section.Item
            icon={<TrendingUpIcon />}
            label="Performance"
            href="#"
          />
          <Sidebar.Nav.Section.Item
            icon={<CampaignIcon />}
            label="Announcements"
            href="#"
          />
        </Sidebar.Nav.Section>
      </Sidebar.Nav>

      <Sidebar.Footer>
        <div className="flex flex-col justify-center items-center text-sm">
          <span className="font-semibold">Rewind-UI</span>
          <span>version x.y.z</span>
        </div>
      </Sidebar.Footer>
    </Sidebar>
  );
}

export default SideBar;
