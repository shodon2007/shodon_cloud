-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3307
-- Время создания: Авг 07 2023 г., 14:44
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shodon.ru`
--

-- --------------------------------------------------------

--
-- Структура таблицы `app-list`
--

CREATE TABLE `app-list` (
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `github` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `online` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `app-list`
--

INSERT INTO `app-list` (`name`, `type`, `github`, `online`, `id`) VALUES
('tennis', 'landing', 'https://github.com/shodon2007/tennis', 'https://tennis.shodon.ru', 1),
('portfolio', 'landing', 'https://github.com/shodon2007/portfolio', 'https://portfolio.shodon.ru', 2),
('clothes-store', 'landing', 'https://github.com/shodon2007/clothes-store', 'https://clothes-store.shodon.ru', 3),
('notation', 'react', 'https://github.com/shodon2007/notation', 'https://notation.shodon.ru', 4),
('keyboard-stamina', 'javascript', 'https://github.com/shodon2007/keyboard-stamina', 'https://keyboard-stamina.shodon.ru', 6),
('regna', 'landing', 'https://github.com/shodon2007/regna', 'https://regna.shodon.ru', 7),
('stamina', 'landing', 'https://github.com/shodon2007/stamina', 'https://stamina.shodon.ru', 8),
('calculator', 'javascript', 'https://github.com/shodon2007/calculator', 'https://calculator.shodon.ru', 9),
('movie', 'javascript', 'https://github.com/shodon2007/movie', 'https://movie.shodon.ru', 10),
('search', 'react', 'https://github.com/shodon2007/search', 'https://search.shodon.ru', 11),
('player', 'javascript', 'https://github.com/shodon2007/player', 'https://player.shodon.ru', 12),
('tictactoe', 'react', 'https://github.com/shodon2007/tictactoe', 'https://tictactoe.shodon.ru', 13),
('wine', 'landing', 'https://github.com/shodon2007/wine', 'https://wine.shodon.ru', 14),
('todo', 'react', 'https://github.com/shodon2007/todo', 'https://todo.shodon.ru', 15),
('quiz', 'react', 'https://github.com/shodon2007/quiz', 'https://quiz.shodon.ru', 16);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `app-list`
--
ALTER TABLE `app-list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `app-list`
--
ALTER TABLE `app-list`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
