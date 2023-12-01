import { useState } from "react";


function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'İzmir'
    ];

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {
                    items.map((item, index) =>
                        <li
                            key={item}
                            onClick={() => { setSelectedIndex(index) }}
                            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item '}>
                            {item}
                        </li>
                    )
                }
            </ul>
        </>
    );
}

export default ListGroup;