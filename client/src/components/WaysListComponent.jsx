export default function WaysListComponent(path) {

    return (
        <div>
            <details className='w-7/12 mx-auto cursor-pointer max-w-lg'>
                <summary className='flex justify-between w-full mx-auto p-8 font-semibold inter-font border-4 border-gray-200 focus:ring-1 focus:ring-gray-200 hover:backdrop-brightness-95'>
                    <div>{path[0]}</div>
                    <div>{path[path.length - 1]}</div>
                    <div className='text-gray-500'>длина пути: {path.length}</div>
                </summary>
                <div className="font-light border border-b-0 border-gray-100">
                    <table className='w-full table-fixed'>
                        <tbody>
                            <tr>
                                <td className='border border-slate-300 border-b-2 border-l-2 text-center font-bold'>Откуда</td>
                                <td className='border border-slate-300 border-b-2 border-r-2 text-center font-bold'>Куда</td>
                            </tr>
                            {
                                path.map((city, index, array) => 
                                    <tr>
                                        {
                                            (city != array[array.length - 1])
                                            ?
                                                <td className='border border-slate-300 text-center border-x-2'>{city}</td>
                                            :
                                                <td></td>
                                        }
                                        {
                                            (city != array[array.length - 1])
                                            ?
                                                <td className='border border-slate-300 text-center border-x-2'>{array[index+1]}</td>
                                            :
                                                <td></td>
                                        }
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </details>
        </div>
    )
}