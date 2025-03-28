import { Column, Entity, Index } from "typeorm";

@Index("sig_telepon_tagihan_pkey", ["blnTagihan", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kodeArea", "noTelepon", "noUrut", "thnTagihan"], { unique: true })
@Entity("sig_telepon_tagihan", { schema: "public" })
export class SigTeleponTagihan {
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

  @Column("character varying", { primary: true, name: "kode_area", length: 4 })
  kodeArea!: string;

  @Column("character varying", {
    primary: true,
    name: "no_telepon",
    length: 13,
  })
  noTelepon!: string;

  @Column("character", { primary: true, name: "thn_tagihan", length: 4 })
  thnTagihan!: string;

  @Column("character", { primary: true, name: "bln_tagihan", length: 2 })
  blnTagihan!: string;

  @Column("bigint", { name: "jml_tagihan", nullable: true })
  jmlTagihan!: string | null;
}
