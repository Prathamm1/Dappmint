import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
// Assuming you have the style object from your previous code
import { whoToFollow } from '/lib/static'; // Keep this if you still want to use static data for "Who to follow"

const style = {
    wrapper: `flex-[1] p-4 overflow-auto no-scrollbar`,
    searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
    searchIcon: `text-[#8899a6] mr-2`,
    inputBox: `bg-transparent outline-none`,
    section: `bg-[#192734] my-6 rounded-xl`,
    title: `p-2 font-bold text-lg `,
    showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]`,
    item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
    newsItemLeft: `flex-1`,
    newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
    newsItemTitle: `text-sm font-bold overflow-hidden text-overflow-ellipsis white-space-nowrap`,
    newsItemRight: `w-1/5 ml-3`,
    newsItemImage: `rounded-xl h-14 w-14 object-cover`,
    followAvatarContainer: `w-1/6`,
    followAvatar: `rounded-full h-[40px] w-[40px]`,
    profileDetails: `flex-1`,
    name: `font-bold`,
    handle: `text-[#8899a6] overflow-hidden text-overflow-ellipsis white-space-nowrap`,
    followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

const handleArticleClick = (url) => {
    // Open the article URL in a new tab
    window.open(url, '_blank');
};
const Widgets = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = "d120c071a6a24ebdb769ee7ae96bc3f6"; // Replace with your NewsAPI key
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                // Shuffle the articles array
                const shuffledArticles = data.articles.sort(() => 0.5 - Math.random());
                // Select the first 5-6 items
                const selectedArticles = shuffledArticles.slice(0, 4);
                setNews(selectedArticles); // Update the state with these items
            } catch (error) {
                console.error("Failed to fetch news:", error);
            }
        };

        fetchNews();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className={style.wrapper}>
            <div className={style.searchBar}>
                <BiSearch className={style.searchIcon} />
                <input
                    placeholder='Search DappMint'
                    type='text'
                    className={style.inputBox}
                />
            </div>
            <div className={style.section}>
                <div className={style.title}>What's happening</div>
                {news.map((item, index) => (
                    <div key={index} className={style.item} onClick={() => handleArticleClick(item.url)}>
                        <div className={style.newsItemLeft}>
                            <div className={style.newsItemCategory}>{item.source.name}</div>
                            <div className={style.newsItemTitle}>{item.title}</div>
                        </div>
                        <div className={style.newsItemRight}>
                            <img
                                src={item.urlToImage}
                                alt={item.title}
                                className={style.newsItemImage}
                            />
                        </div>
                    </div>
                ))}
                <div className={style.showMore}>Show more</div>
            </div>
            <div className={style.section}>
                <div className={style.title}>Who to follow</div>
                {whoToFollow.map((item, index) => (
                    <div key={index} className={style.item}>
                        <div className={style.followAvatarContainer}>
                            <img
                                src={item.avatar}
                                alt={item.handle}
                                className={style.followAvatar}
                            />
                        </div>
                        <div className={style.profileDetails}>
                            <div className={style.name}>{item.name}</div>
                            <div className={style.handle}>{item.handle}</div>
                        </div>
                        <div className={style.followButton}>Follow</div>
                    </div>
                ))}
                <div className={style.showMore}>Show more</div>
            </div>
        </div>
    );
};

export default Widgets;