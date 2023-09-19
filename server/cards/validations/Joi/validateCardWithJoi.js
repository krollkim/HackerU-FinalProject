const Joi = require("joi");

const validateCardWithJoi = card => {
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    review: Joi.string().min(2).max(1024).required(),
    directedBy: Joi.string().min(2).max(256).required(),
    createdAt: Joi.string().min(2).max(256),
    web: Joi.string()
      .ruleset.regex(urlRegex)
      .rule({ message: 'card "web" mast be a valid url' })
      .allow(""),

    image: Joi.object()
      .keys({
        url: Joi.string()
          .ruleset.regex(urlRegex)
          .rule({ message: 'card.image "url" mast be a valid url' })
          .allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
      })
      .required(),
    bizNumber: Joi.number().allow(""),
    user_id: Joi.string().allow(""),
  });

  return schema.validate(card);
};

module.exports = validateCardWithJoi;
