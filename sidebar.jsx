import "./sidebar.css";

// function Sidebar() {
//   return (
//     <>
//       <div className="sidebar">
//         <div className="sidebar-header">
//           <span>Chats</span>
//           <div className="sidebar-icons">
//             <i className="fas fa-users"></i>
//             <i className="fas fa-comment-alt"></i>
//           </div>
//         </div>

//         <div className="sidebar-search">
//           <input type="text" placeholder="Search chats..." />
//         </div>
//         <div>
//           <div className="Contact active">Reddy</div>
//           <div className="Contact"> Prabhas</div>
//           <div className="Contact"> NTR</div>
//           <div className="Contact"> Ramcharan</div>
//           <div className="Contact"> MaheshBabu</div>
//         </div>
//       </div>
//     </>
//   );
// }

function Sidebar({ selectedUser, onSelectUser }) {
  const users = ['Reddy', 'Prabhas', 'NTR', 'Ramcharan', 'MaheshBabu'];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span>Chats</span>
        <div className="sidebar-icons">
          <i className="fas fa-users"></i>
          <i className="fas fa-comment-alt"></i>
        </div>
      </div>

      <div className="sidebar-search">
        <input type="text" placeholder="Search chats..." />
      </div>

      <div>
        {users.map((user) => (
          <div
            key={user}
            className={`Contact ${selectedUser === user ? 'active' : ''}`}
            onClick={() => onSelectUser(user)}
          >
            {user}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;



