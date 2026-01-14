import type { Member } from "../types";
import "./MemberList.css";


type Props = {
  members: Member[];
};

function MemberList({ members }: Props) {
  if (members.length === 0) {
    return <p>Add members to get started !</p>;
  }

  return (
    <div className="members-list">
  {members.map((member) => (
    <div className="member-chip" key={member.id}>
      <span className="member-name">{member.name}</span>
      <span
        className={
          member.balance >= 0 ? "member-balance positive" : "member-balance negative"
        }
      >
        ₹{member.balance}
      </span>
    </div>
  ))}
</div>
  )
}

export default MemberList;
