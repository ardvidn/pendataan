import { Column, Entity, Index } from "typeorm";

@Index("comp_pemegang_saham_fk", ["mfcabComp", "mfkppComp", "mfnpwpComp"], {})
@Index("pemegang_saham_pkey", ["mfcabComp", "mfcabPemegang", "mfkppComp", "mfkppPemegang", "mfnpwpComp", "mfnpwpPemegang"], { unique: true })
@Entity("pemegang_saham", { schema: "public" })
export class PemegangSaham {
  @Column("character", { primary: true, name: "mfnpwp_comp", length: 9 })
  mfnpwpComp!: string;

  @Column("character", { primary: true, name: "mfkpp_comp", length: 3 })
  mfkppComp!: string;

  @Column("character", { primary: true, name: "mfcab_comp", length: 3 })
  mfcabComp!: string;

  @Column("character", { primary: true, name: "mfnpwp_pemegang", length: 9 })
  mfnpwpPemegang!: string;

  @Column("character", { primary: true, name: "mfkpp_pemegang", length: 3 })
  mfkppPemegang!: string;

  @Column("character", { primary: true, name: "mfcab_pemegang", length: 3 })
  mfcabPemegang!: string;

  @Column("character varying", {
    name: "nama_pemegang",
    nullable: true,
    length: 30,
  })
  namaPemegang!: string | null;

  @Column("character varying", {
    name: "alamat_pemegang",
    nullable: true,
    length: 50,
  })
  alamatPemegang!: string | null;

  @Column("bigint", { name: "jumlah_saham", nullable: true })
  jumlahSaham!: string | null;
}
