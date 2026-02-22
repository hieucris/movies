export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  trending?: boolean;
  tags?: string[];
}

export interface Movie {
  id: number;
  slug: string;
  title: string;
  description: string;
  poster: string;
  rating: number;
  releaseYear: number;
  genres: string[];
  facebookVideoEmbed: string;
  trending?: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "cong-nghe-ai-thay-doi-the-gioi",
    title: "Công Nghệ AI Đang Thay Đổi Thế Giới Như Thế Nào?",
    excerpt:
      "Trí tuệ nhân tạo (AI) đang dần trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta, từ việc hỗ trợ công việc đến giải trí.",
    content: `Trí tuệ nhân tạo (AI) đã và đang tạo ra những bước đột phá vượt bậc trong nhiều lĩnh vực của đời sống xã hội. Từ y tế, giáo dục, đến kinh doanh và giải trí, AI đang dần thay đổi cách chúng ta làm việc và sinh hoạt.

Trong lĩnh vực y tế, AI đã giúp các bác sĩ chẩn đoán bệnh nhanh chóng và chính xác hơn. Các thuật toán học máy có thể phân tích hàng triệu hình ảnh y khoa trong thời gian ngắn, phát hiện những dấu hiệu bệnh tật mà mắt thường có thể bỏ sót.

Trong giáo dục, AI đang cá nhân hóa trải nghiệm học tập cho từng học sinh. Các hệ thống giáo dục thông minh có thể điều chỉnh nội dung và tốc độ học phù hợp với năng lực của mỗi người.

Về mặt kinh doanh, AI đang tự động hóa nhiều quy trình, giúp doanh nghiệp tăng hiệu suất và giảm chi phí. Từ chatbot chăm sóc khách hàng đến hệ thống dự đoán nhu cầu thị trường, AI đang trở thành công cụ không thể thiếu.

Tuy nhiên, sự phát triển của AI cũng đặt ra nhiều thách thức về đạo đức, quyền riêng tư và việc làm. Chúng ta cần có những quy định và chuẩn mực phù hợp để đảm bảo AI phát triển theo hướng có lợi cho toàn nhân loại.`,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "Công Nghệ",
    author: "Nguyễn Văn A",
    date: "21/02/2026",
    trending: true,
    tags: ["AI", "Công Nghệ", "Tương Lai", "Đổi Mới"],
  },
  {
    id: 2,
    slug: "du-lich-viet-nam-2026",
    title: "Top 10 Địa Điểm Du Lịch Việt Nam Năm 2026",
    excerpt:
      "Khám phá những điểm đến tuyệt vời nhất Việt Nam trong năm 2026. Từ biển đảo đến núi rừng, từ phố cổ đến đô thị hiện đại.",
    content: `Việt Nam với vẻ đẹp đa dạng và phong phú đang thu hút hàng triệu lượt khách du lịch mỗi năm. Năm 2026 hứa hẹn sẽ là một năm bùng nổ cho ngành du lịch Việt Nam với nhiều điểm đến hấp dẫn.

Hà Nội - Thủ đô ngàn năm văn hiến với phố cổ, hồ Gươm, và văn hóa ẩm thực phong phú. Đây là điểm đến không thể bỏ qua cho những ai muốn tìm hiểu về lịch sử và văn hóa Việt Nam.

Vịnh Hạ Long - Di sản thiên nhiên thế giới với hàng ngàn đảo đá vôi lớn nhỏ tạo nên cảnh quan kỳ vĩ. Du khách có thể trải nghiệm du thuyền qua đêm và khám phá các hang động tuyệt đẹp.

Hội An - Phố cổ được bảo tồn nguyên vẹn với kiến trúc độc đáo, đèn lồng rực rỡ và ẩm thực đặc sắc. Ban đêm, Hội An trở nên lung linh với hàng nghìn chiếc đèn lồng.

Phú Quốc - Đảo ngọc với bãi biển trắng mịn, nước biển trong xanh và hệ sinh thái đa dạng. Đây là điểm đến lý tưởng cho những ai yêu thích nghỉ dưỡng và thư giãn.

Đà Lạt - Thành phố ngàn hoa với khí hậu mát mẻ quanh năm, thác nước hùng vĩ và những đồi chè xanh mướt. Đà Lạt là điểm đến yêu thích của các cặp đôi và gia đình.`,
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    category: "Du Lịch",
    author: "Trần Thị B",
    date: "20/02/2026",
    trending: true,
    tags: ["Du Lịch", "Việt Nam", "Khám Phá", "Điểm Đến"],
  },
  {
    id: 3,
    slug: "the-thao-viet-nam-sea-games",
    title: "Thể Thao Việt Nam Chuẩn Bị Cho SEA Games 2026",
    excerpt:
      "Đội tuyển Việt Nam đang tích cực tập luyện và chuẩn bị cho mùa SEA Games sắp tới với mục tiêu đạt thành tích cao nhất.",
    content: `SEA Games 2026 đang đến gần và các vận động viên Việt Nam đang tích cực tập luyện để mang về nhiều huy chương cho đất nước. Với sự đầu tư mạnh mẽ từ Nhà nước và các tổ chức thể thao, hy vọng Việt Nam sẽ có một kỳ SEA Games thành công rực rỡ.

Các môn thể thao truyền thống như bóng đá, bơi lội, điền kinh đang được tập trung đầu tư và phát triển. Đặc biệt, môn bóng đá nam và nữ của Việt Nam đang có những bước tiến vượt bậc trên trường quốc tế.

Bên cạnh đó, các môn thể thao mới như Esports, breakdance cũng được đưa vào chương trình thi đấu, mở ra cơ hội cho Việt Nam giành thêm nhiều huy chương.

Với tinh thần quyết tâm cao và sự chuẩn bị kỹ lưỡng, các vận động viên Việt Nam hứa hẹn sẽ mang đến những màn trình diễn xuất sắc và làm rạng danh thể thao Việt Nam trên đấu trường khu vực.`,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    category: "Thể Thao",
    author: "Lê Văn C",
    date: "19/02/2026",
    tags: ["Thể Thao", "SEA Games", "Việt Nam", "Huy Chương"],
  },
  {
    id: 4,
    slug: "kinh-te-viet-nam-tang-truong",
    title: "Kinh Tế Việt Nam Tăng Trưởng Ấn Tượng Quý 1/2026",
    excerpt:
      "GDP Việt Nam tăng trưởng vượt mong đợi trong quý đầu năm 2026, cho thấy sức phục hồi mạnh mẽ của nền kinh tế.",
    content: `Nền kinh tế Việt Nam tiếp tục cho thấy sức bật ấn tượng trong quý 1 năm 2026 với mức tăng trưởng GDP đạt 6.8%, vượt xa dự báo của các chuyên gia.

Các ngành công nghiệp chế biến, chế tạo và dịch vụ là động lực chính thúc đẩy tăng trưởng. Đặc biệt, ngành công nghệ thông tin và điện tử đã có sự tăng trưởng vượt bậc nhờ làn sóng chuyển dịch sản xuất từ các nước trong khu vực.

Xuất khẩu cũng ghi nhận mức tăng trưởng tích cực, đặc biệt là các mặt hàng điện tử, dệt may và nông sản. Việt Nam đang trở thành một trong những điểm đến ưu tiên cho các nhà đầu tư nước ngoài trong khu vực.

Tuy nhiên, các chuyên gia cũng cảnh báo về những thách thức như lạm phát, biến động tỷ giá và cạnh tranh gay gắt trên thị trường quốc tế. Chính phủ cần có những chính sách phù hợp để duy trì đà tăng trưởng bền vững.`,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    category: "Kinh Tế",
    author: "Phạm Thị D",
    date: "18/02/2026",
    tags: ["Kinh Tế", "GDP", "Tăng Trưởng", "Việt Nam"],
  },
  {
    id: 5,
    slug: "giao-duc-chuyen-doi-so",
    title: "Giáo Dục Việt Nam Chuyển Đổi Số Toàn Diện",
    excerpt:
      "Các trường học trên toàn quốc đang tích cực triển khai chuyển đổi số, ứng dụng công nghệ vào giảng dạy và học tập.",
    content: `Chuyển đổi số trong giáo dục đang trở thành xu hướng tất yếu và Việt Nam không nằm ngoài làn sóng này. Các trường học từ tiểu học đến đại học đang tích cực ứng dụng công nghệ vào quá trình giảng dạy và học tập.

Các lớp học trực tuyến, học liệu số, và hệ thống quản lý học tập thông minh đang được triển khai rộng rãi. Điều này không chỉ giúp nâng cao chất lượng giáo dục mà còn tạo điều kiện cho học sinh ở vùng sâu vùng xa tiếp cận với kiến thức.

Tuy nhiên, việc chuyển đổi số cũng đặt ra nhiều thách thức như đào tạo giáo viên, đầu tư cơ sở hạ tầng và đảm bảo an toàn thông tin. Chính phủ và các cơ quan giáo dục cần có lộ trình cụ thể và nguồn lực phù hợp để đảm bảo quá trình chuyển đổi diễn ra thuận lợi.`,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    category: "Giáo Dục",
    author: "Hoàng Văn E",
    date: "17/02/2026",
    tags: ["Giáo Dục", "Chuyển Đổi Số", "Công Nghệ", "Học Tập"],
  },
  {
    id: 6,
    slug: "van-hoa-am-thuc-viet",
    title: "Văn Hóa Ẩm Thực Việt Nam Chinh Phục Thế Giới",
    excerpt:
      "Món ăn Việt Nam đang ngày càng được yêu thích và lan tỏa rộng rãi trên thế giới, từ phở đến bánh mì.",
    content: `Ẩm thực Việt Nam với hương vị đặc trưng và phong phú đang dần chinh phục khẩu vị của thực khách quốc tế. Từ phở, bánh mì đến bún chả, các món ăn Việt Nam xuất hiện ngày càng nhiều trên các bản đồ ẩm thực toàn cầu.

Phở Việt Nam đã trở thành biểu tượng ẩm thực được biết đến rộng rãi, với hương vị thanh đạm nhưng đậm đà. Nhiều nhà hàng phở đã mở cửa ở các thành phố lớn trên thế giới như New York, London, Paris.

Bánh mì Việt Nam cũng không kém cạnh với sự kết hợp độc đáo giữa ẩm thực phương Đông và phương Tây. Chiếc bánh mì giòn rụm với nhân thịt, pate, rau sống và gia vị đã chinh phục được lòng nhiều thực khách khó tính.

Sự lan tỏa của ẩm thực Việt Nam không chỉ giúp quảng bá văn hóa mà còn mở ra nhiều cơ hội kinh doanh cho người Việt Nam trên toàn thế giới.`,
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    category: "Văn Hóa",
    author: "Nguyễn Thị F",
    date: "16/02/2026",
    trending: true,
    tags: ["Văn Hóa", "Ẩm Thực", "Phở", "Việt Nam"],
  },
];

const movies: Movie[] = [
  {
    id: 1,
    slug: "dune-part-two",
    title: "Dune: Part Two",
    description:
      "Hành trình tiếp theo của Paul Atreides khi anh hợp lực với Chani và người Fremen để trả thù những kẻ đã phá hủy gia đình mình.",
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    rating: 8.8,
    releaseYear: 2024,
    genres: ["Khoa Học Viễn Tưởng", "Phiêu Lưu", "Hành Động"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1274553568069985%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: true,
  },
  {
    id: 2,
    slug: "buoi-phat-truc-tiep-5",
    title: "Buổi Phát Trực Tiếp - Tập 5",
    description:
      "Câu chuyện về J. Robert Oppenheimer, nhà vật lý lý thuyết đứng đầu dự án Manhattan phát triển bom nguyên tử đầu tiên.",
    poster:
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80",
    rating: 8.5,
    releaseYear: 2023,
    genres: ["Tiểu Sử", "Lịch Sử", "Chính Kịch"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1622388495458700%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: true,
  },
  {
    id: 3,
    slug: "barbie",
    title: "Barbie",
    description:
      "Barbie và Ken rời khỏi Barbie Land để khám phá thế giới thực, nơi họ học được ý nghĩa thực sự của việc trở thành con người.",
    poster:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
    rating: 7.8,
    releaseYear: 2023,
    genres: ["Hài", "Phiêu Lưu", "Giả Tưởng"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1274553568069985%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: false,
  },
  {
    id: 4,
    slug: "the-batman",
    title: "The Batman",
    description:
      "Trong năm thứ hai làm người dơi, Bruce Wayne phải đối mặt với một kẻ sát nhân hàng loạt tàn bạo nhằm vào giới tinh hoa của Gotham.",
    poster:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80",
    rating: 8.2,
    releaseYear: 2022,
    genres: ["Hành Động", "Tội Phạm", "Chính Kịch"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1274553568069985%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: false,
  },
  {
    id: 5,
    slug: "spider-man-across-the-spider-verse",
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "Miles Morales tiếp tục hành trình Spider-Man của mình và phải đối mặt với những Spider-People từ các vũ trụ khác nhau.",
    poster:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80",
    rating: 8.9,
    releaseYear: 2023,
    genres: ["Hoạt Hình", "Hành Động", "Phiêu Lưu"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1274553568069985%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: true,
  },
  {
    id: 6,
    slug: "the-zone-of-interest",
    title: "The Zone of Interest",
    description:
      "Cuộc sống của một gia đình người Đức sống cạnh trại tập trung Auschwitz trong Thế chiến thứ II.",
    poster:
      "https://images.unsplash.com/photo-1554072675-66db59dcc201?w=800&q=80",
    rating: 7.9,
    releaseYear: 2023,
    genres: ["Lịch Sử", "Chính Kịch", "Chiến Tranh"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1274553568069985%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: false,
  },
  {
    id: 7,
    slug: "poor-things",
    title: "Poor Things",
    description:
      "Câu chuyện kỳ lạ về Bella Baxter, một phụ nữ trẻ được hồi sinh bởi một nhà khoa học tài ba và lập dị.",
    poster:
      "https://images.unsplash.com/photo-1574267432644-f02b2b2b9d9b?w=800&q=80",
    rating: 8.1,
    releaseYear: 2023,
    genres: ["Hài", "Chính Kịch", "Khoa Học Viễn Tưởng"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1274553568069985%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: false,
  },
  {
    id: 8,
    slug: "killers-of-the-flower-moon",
    title: "Killers of the Flower Moon",
    description:
      "Vụ giết người hàng loạt người Osage ở Oklahoma những năm 1920 và sự ra đời của FBI.",
    poster:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    rating: 7.7,
    releaseYear: 2023,
    genres: ["Tội Phạm", "Lịch Sử", "Chính Kịch"],
    facebookVideoEmbed:
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1274553568069985%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
    trending: false,
  },
];

export const getFeaturedNews = () =>
  newsArticles.filter((article) => article.trending).slice(0, 3);
export const getAllNews = () => newsArticles;
export const getTrendingNews = () =>
  newsArticles.filter((article) => article.trending).slice(0, 5);
export const getRecentNews = () => newsArticles.slice(0, 5);
export const getNewsArticle = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);

export const getFeaturedMovies = () =>
  movies.filter((movie) => movie.trending).slice(0, 4);
export const getAllMovies = () => movies;
export const getMovie = (slug: string) =>
  movies.find((movie) => movie.slug === slug);
