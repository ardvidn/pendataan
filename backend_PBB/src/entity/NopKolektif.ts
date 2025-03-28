import { Column, Entity, Index, OneToMany } from "typeorm";
import { NopKolektifPiutang } from "./NopKolektifPiutang";

@Index("nop_kolektif_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPembentukan"], { unique: true })
@Entity("nop_kolektif", { schema: "public" })
export class NopKolektif {
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

  @Column("character varying", { name: "jalan_op", nullable: true, length: 30 })
  jalanOp!: string | null;

  @Column("character varying", {
    name: "blok_kav_no_op",
    nullable: true,
    length: 15,
  })
  blokKavNoOp!: string | null;

  @Column("character", { name: "rw_op", nullable: true, length: 2 })
  rwOp!: string | null;

  @Column("character", { name: "rt_op", nullable: true, length: 3 })
  rtOp!: string | null;

  @Column("character", { name: "jns_bumi", nullable: true, length: 1 })
  jnsBumi!: string | null;

  @Column("character", { name: "kd_jpb", nullable: true, length: 2 })
  kdJpb!: string | null;

  @Column("character", { name: "kd_status_wp", nullable: true, length: 1 })
  kdStatusWp!: string | null;

  @Column("character", { name: "kategori_op", nullable: true, length: 1 })
  kategoriOp!: string | null;

  @Column("character varying", {
    name: "keterangan",
    nullable: true,
    length: 255,
  })
  keterangan!: string | null;

  @Column("character varying", {
    name: "no_formulir",
    nullable: true,
    length: 30,
  })
  noFormulir!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_pembentukan",
    nullable: true,
  })
  tglPembentukan!: Date | null;

  @Column("character", { name: "nip_pembentuk", nullable: true, length: 18 })
  nipPembentuk!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_pemutakhiran",
    nullable: true,
  })
  tglPemutakhiran!: Date | null;

  @Column("character", { name: "nip_pemutakhir", nullable: true, length: 18 })
  nipPemutakhir!: string | null;

  @Column("character", {
    primary: true,
    name: "thn_pembentukan",
    length: 4,
    default: () => "'2017'",
  })
  thnPembentukan!: string;

  @OneToMany(() => NopKolektifPiutang, (nopKolektifPiutang) => nopKolektifPiutang.nopKolektif)
  nopKolektifPiutangs!: NopKolektifPiutang[];
}
