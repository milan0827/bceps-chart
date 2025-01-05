import Link from "next/link";

const TableBody = ({ data }: { data: any }) => {
  return (
    <tr
      key={data.code}
      className="[&>td]:p-2  [&>td]:max-w-[7.5rem] [&>td]:truncate [&>td]:border [&>td]:border-gray-400 text-gray-400"
    >
      {/* TODO: indexing */}
      {/* <td>{i + 1}</td> */}
      <td>{data.code}</td>
      <td>{data.name}</td>
      <td>{data?.languages?.map((a) => a.name)}</td>
      <td>{data?.continent?.name}</td>
      <td>{data?.currency}</td>
      <td>
        <Link
          href={`country-detail/${data.code}`}
          className="bg-green-600 px-2 py-1 text-gray-300 rounded-md"
        >
          View Detail
        </Link>{" "}
      </td>
    </tr>
  );
};

export default TableBody;
