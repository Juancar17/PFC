<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf51de75a4b761b9af64b7981a5bcfbf0
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Tienda\\Ecommerce\\' => 17,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Tienda\\Ecommerce\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf51de75a4b761b9af64b7981a5bcfbf0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf51de75a4b761b9af64b7981a5bcfbf0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf51de75a4b761b9af64b7981a5bcfbf0::$classMap;

        }, null, ClassLoader::class);
    }
}
