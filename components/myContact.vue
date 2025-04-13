<script setup>
import { ref } from 'vue';

const userEmail = ref('');
const subject = ref('');
const message = ref('');

const sendEmail = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:corentin.beu@laposte.net?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}%0D%0A%0D%0AFrom: ${encodeURIComponent(userEmail.value)}`;
    window.location.href = mailtoLink;

    userEmail.value = '';
    subject.value = '';
    message.value = '';
};
</script>

<template>
    <div class="contact">
        <h2 class="contact__title">Contact</h2>
        
        <form @submit="sendEmail" class="contact__form">
            <div class="contact__form-group">
                <label for="userEmail">Email:</label>
                <input type="email" id="userEmail" v-model="userEmail" name="user_email" required>
            </div>
            <div class="contact__form-group">
                <label for="subject">Objet:</label>
                <input type="text" id="subject" v-model="subject" name="subject" required>
            </div>
            <div class="contact__form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" name="message" required></textarea>
            </div>
            <button type="submit" class="contact__form-submit">Envoyer</button>
        </form>
    </div>
</template>

<style lang="scss">
.contact {
    margin-top: 10rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    gap: 0.5rem;

    &__title {
        font-size: $giant;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5rem;
    }

    &__form {
        display: flex;
        flex-flow: column;
        gap: 1rem;
        width: 80%;

        &-group {
            display: flex;
            flex-flow: column;
            gap: 0.5rem;

            label {
                font-weight: bold;
            }

            input, textarea {
                padding: 0.5rem;
                border: 1px solid $gray;
                border-radius: 5px;
                width: 100%;
                
            }
            textarea{
                height: 10rem;
            }
        }

        &-submit {
            padding: 0.75rem;
            background-color: $primary;
            color: $white;
            border: none;
            border-radius: 5px;
            margin-left: auto;
            margin-right: auto;
            cursor: pointer;
            font-size: $medium;
        }
    }
}
</style>