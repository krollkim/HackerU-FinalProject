import Joi from 'joi';

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const cardSchema = {
  title: Joi.string ().min (2).max (256).required (),
  subtitle: Joi.string ().min (2).max (256).required (),
  description: Joi.string ().min (2).max (1024).required (),
  review: Joi.string ().min (2).max (1024).required (),
  directedBy: Joi.string ().min (2).max (256).required (),
  createdAt: Joi.string ().min (2).max (256),
  webUrl: Joi.string ()
    .ruleset.regex (urlRegex)
    .rule ({message: 'card "web" mast be a valid url'})
    .allow (''),
  imageUrl: Joi.string ()
    .ruleset.regex (urlRegex)
    .rule ({message: 'card.image "url" mast be a valid url'})
    .allow (''),
  imageAlt: Joi.string ().min (2).max (256).allow (''),
  user_id: Joi.string ().min (2).max (256)
};

export default cardSchema;
