const normalizeCard = card => {
  return {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    review: card.review,
    directedBy: card.directedBy,
    createdAt: card.createdAt,
    web: card.webUrl,
    image: {
      url: card.imageUrl,
      alt: card.imageAlt,
    },
    user_id: card.user_id,
  };
};

export default normalizeCard;