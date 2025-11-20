import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">Username: {username}</p>
      <p className="text-gray-600 mb-1">Email: {email}</p>
      <p className="text-gray-600 mb-1">Phone: {phone}</p>
      <p className="text-gray-600 mb-1">Website: {website}</p>
      <p className="text-gray-600 mb-1">Company: {company.name}</p>
      <p className="text-gray-600 mb-1">Catchphrase: {company.catchPhrase}</p>
      <p className="text-gray-600">Address: {address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;