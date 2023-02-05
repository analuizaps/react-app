import "./sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top"> 
        <PaidOutlinedIcon className="icon-logo"/>

        <span className="logo">Retail <br/><p className="system">SYSTEM</p></span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <HomeIcon className="icon"/>
            <span>Página inicial</span>
          </li>
          {/* <p className="title"> SERVICE</p> */}
          <li>
            <ArchiveOutlinedIcon className="icon"/>
            <span>Entrada de mercadoria</span>
          </li>
          <li>
            <ContentPasteOutlinedIcon className="icon"/>
            <span>Saída de mercadoria</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className="icon"/>
            <span>Estoque</span>
          </li>
        </ul>
      </div>
      <div className="bottom">.</div>
    </div>
  )
}

export default Sidebar;