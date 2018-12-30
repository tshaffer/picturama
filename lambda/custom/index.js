/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to picturama!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('picturama', speechText)
      .getResponse();
  },
};

const PicturamaListAlbumsIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PicturamaListAlbumsIntent';
  },
  handle(handlerInput) {
    const speechText = 'picturama list albums!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('picturama list albums', speechText)
      .getResponse();
  },
}

const PicturamaNamedAlbumIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PicturamaNamedAlbumIntent';
  },
  handle(handlerInput) {
    const speechText = 'display album named ' + handlerInput.requestEnvelope.request.intent.slots.name.value;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('picturama named album', speechText)
      .getResponse();
  },
}

const PicturamaDatedAlbumIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PicturamaDatedAlbumIntent';
  },
  handle(handlerInput) {
    // const speechText = 'picturama dated album!';
    const speechText = 'display album from ' + handlerInput.requestEnvelope.request.intent.slots.photosDate.value;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('picturama dated album', speechText)
      .getResponse();
  },
}

const PicturamaVacationAlbumIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PicturamaVacationAlbumIntent';
  },
  handle(handlerInput) {
    // const speechText = 'picturama vacation album!';
    const speechText = 'display vacation album ' + handlerInput.requestEnvelope.request.intent.slots.vacation.value;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('picturama vacation album', speechText)
      .getResponse();
  },
}

const PicturamaEventAlbumIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'PicturamaEventAlbumIntent';
  },
  handle(handlerInput) {
    // const speechText = 'picturama event album!';
    const speechText = 'display event album ' + handlerInput.requestEnvelope.request.intent.slots.event.value;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('picturama event album', speechText)
      .getResponse();
  },
}

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say picturama to me!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('picturama', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('picturama', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    PicturamaListAlbumsIntent,
    PicturamaNamedAlbumIntent,
    PicturamaDatedAlbumIntent,
    PicturamaVacationAlbumIntent,
    PicturamaEventAlbumIntent,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
