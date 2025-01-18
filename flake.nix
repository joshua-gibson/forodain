{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true; # Allow non-free packages for development
      };
    in {
      devShell = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs
          zsh
        ];

        shellHook = ''
          echo "Development environment ready!"
          export PATH=$PATH:$HOME/.local/bin
          exec zsh
        '';
      };
    });
}
