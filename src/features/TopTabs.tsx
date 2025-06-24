import Tabs from '../components/Tabs';
import BodyPanel from '../layouts/Body';

const SettingsPanel = () => <div> Welcome to Fleet Sizing</div>;
const ParkingPanel = () => <div> Welcome to Parking</div>;


const TopTabs = () => {
  const tabs = [
    { id: 'charging_stations', label: 'Charging Stations', content: <BodyPanel /> },
    { id: 'fleet_sizing', label: 'Fleet Sizing', content: <SettingsPanel /> },
    { id: 'parking', label: 'Parking', content: <ParkingPanel /> },
  ];

  return (
    <Tabs tabs={tabs} defaultActive="charging_stations" />
  );
};

export default TopTabs;

