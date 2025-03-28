import { Column, Entity, Index } from "typeorm";

@Index("bphtb_pemda_pkey", ["indeksAkses", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("bphtb_pemda", { schema: "public" })
export class BphtbPemda {
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

  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("smallint", { primary: true, name: "indeks_akses" })
  indeksAkses!: number;

  @Column("character varying", {
    name: "nama_yg_mengalihkan",
    nullable: true,
    length: 30,
  })
  namaYgMengalihkan!: string | null;

  @Column("character varying", {
    name: "alamat_yg_mengalihkan",
    nullable: true,
    length: 100,
  })
  alamatYgMengalihkan!: string | null;

  @Column("character", {
    name: "npwp_yg_mengalihkan",
    nullable: true,
    length: 15,
  })
  npwpYgMengalihkan!: string | null;

  @Column("character varying", {
    name: "nama_yg_menerima",
    nullable: true,
    length: 30,
  })
  namaYgMenerima!: string | null;

  @Column("character varying", {
    name: "alamat_yg_menerima",
    nullable: true,
    length: 100,
  })
  alamatYgMenerima!: string | null;

  @Column("character", { name: "npwp_yg_menerima", nullable: true, length: 15 })
  npwpYgMenerima!: string | null;

  @Column("bigint", { name: "luas_bumi_bphtb", nullable: true })
  luasBumiBphtb!: string | null;

  @Column("bigint", { name: "luas_bng_bphtb", nullable: true })
  luasBngBphtb!: string | null;

  @Column("numeric", {
    name: "nilai_peralihan",
    nullable: true,
    precision: 20,
    scale: 0,
  })
  nilaiPeralihan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_transaksi",
    nullable: true,
  })
  tglTransaksi!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_perekaman",
    nullable: true,
  })
  tglPerekaman!: Date | null;

  @Column("character", { name: "id_perekam", nullable: true, length: 30 })
  idPerekam!: string | null;

  @Column("character", { name: "kd_jns_transaksi", nullable: true, length: 2 })
  kdJnsTransaksi!: string | null;
}
