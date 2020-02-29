import nltk
texto = 'Sr. Verde matou o Coronel. Mas o Sr. Verde gosta de caju. '
frases = nltk.tokenize.sent_tokenize(texto, language='portuguese')
print(frases)

tokens = nltk.word_tokenize(texto, language='portuguese')
print(tokens)

classes = nltk.pos_tag(tokens)
print(classes)
