import { Column, Entity, Index } from "typeorm";

@Index("jabatan_komdir_fk", ["kdJabatanKomdir"], {})
@Index("komdir_pkey", ["mfcabComp", "mfcabKokmdir", "mfkppComp", "mfkppKomdir", "mfnpwpComp", "mfnpwpKomdir"], { unique: true })
@Index("comp_komdir_fk", ["mfcabComp", "mfkppComp", "mfnpwpComp"], {})
@Entity("komdir", { schema: "public" })
export class Komdir {
  @Column("character", { primary: true, name: "mfnpwp_comp", length: 9 })
  mfnpwpComp!: string;

  @Column("character", { primary: true, name: "mfkpp_comp", length: 3 })
  mfkppComp!: string;

  @Column("character", { primary: true, name: "mfcab_comp", length: 3 })
  mfcabComp!: string;

  @Column("character", { primary: true, name: "mfnpwp_komdir", length: 9 })
  mfnpwpKomdir!: string;

  @Column("character", { primary: true, name: "mfkpp_komdir", length: 3 })
  mfkppKomdir!: string;

  @Column("character", { primary: true, name: "mfcab_kokmdir", length: 3 })
  mfcabKokmdir!: string;

  @Column("character", { name: "kd_jabatan_komdir", nullable: true, length: 2 })
  kdJabatanKomdir!: string | null;

  @Column("character varying", {
    name: "nama_komdir",
    nullable: true,
    length: 30,
  })
  namaKomdir!: string | null;

  @Column("character varying", {
    name: "alamat_komdir",
    nullable: true,
    length: 50,
  })
  alamatKomdir!: string | null;
}
