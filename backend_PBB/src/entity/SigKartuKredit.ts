import { Column, Entity, Index } from "typeorm";

@Index("sig_kartu_kredit_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noKartuKredit", "noKtp", "noUrut"], { unique: true })
@Entity("sig_kartu_kredit", { schema: "public" })
export class SigKartuKredit {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character varying", { primary: true, name: "no_ktp", length: 30 })
  noKtp!: string;

  @Column("character varying", {
    primary: true,
    name: "no_kartu_kredit",
    length: 15,
  })
  noKartuKredit!: string;

  @Column("character varying", {
    name: "nm_kartu_kredit",
    nullable: true,
    length: 30,
  })
  nmKartuKredit!: string | null;
}
