"use client";

import React, {useContext, useEffect, useState} from "react";
import Link from "next/link";
import {MyContext} from "@/Components/MyContextProvider";

const ProgramCategorySidebar = ({program = null, onCategorySelect}) => {
    const {categories} = useContext(MyContext);
    const [selected, setSelected] = useState(categories?.[0] || null);

    useEffect(() => {
        if (selected && onCategorySelect) {
            onCategorySelect(selected);
        }
    }, [selected, onCategorySelect]);

    if (!categories || categories.length === 0) {
        return <div>No categories available</div>;
    }

    return (
        <div className="programs-container">
            <h3 className="heading">Our Programs</h3>
            <form className="program-form">
                {categories.map((category) => (
                    <label key={category.id} className="program-label">
                        <input
                            type="radio"
                            name="program"
                            value={category.title}
                            checked={selected?.id === category.id}
                            onChange={() => setSelected(category)}
                        />
                        <span className={`program-btn ${selected?.id === category.id ? 'active' : ''}`}>
              {category.title}
            </span>
                    </label>
                ))}
            </form>
            {program != null ? (
                <Link href={`/donation?program_id=${program.id}&category_id=${selected?.id}`}>
                    <button className="donate-btn">Donate Now</button>
                </Link>
            ) : (<Link href={`/donation`}>
                <button className="donate-btn">Donate Now</button>
            </Link>)}
        </div>
    );
};

export default ProgramCategorySidebar;